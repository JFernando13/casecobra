'use server'

import { BASE_PRICE, PRODUCT_PRICES } from '@/app/configure/design/constants'
import { db } from '@/db'
import { stripe } from '@/lib/stripe'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import type { Order } from '@prisma/client'

export const createCheckoutSession = async ({
  configId
}: {
  configId: string
}) => {
  const configuratiion = await db.configuration.findUnique({
    where: { id: configId }
  })

  if (!configuratiion) {
    throw new Error('No such configuration found')
  }

  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    throw new Error('You need to be logged in')
  }

  let totalPrice = BASE_PRICE

  if (configuratiion.material === 'polycarbonate') {
    totalPrice += PRODUCT_PRICES.material.polycarbonate
  }

  if (configuratiion.finish === 'textured') {
    totalPrice += PRODUCT_PRICES.finish.textured
  }

  let order: Order | undefined = undefined

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configuratiion.id
    }
  })

  console.log(user.id)

  if (existingOrder) {
    order = existingOrder
  } else {
    order = await db.order.create({
      data: {
        amount: totalPrice / 100,
        userId: user.id,
        configurationId: configuratiion.id
      }
    })
  }

  const product = await stripe.products.create({
    name: 'Custom IPhone Case',
    images: [configuratiion.imageUrl],
    default_price_data: {
      currency: 'usd',
      unit_amount: totalPrice
    }
  })

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order?.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuratiion.id}`,
    payment_method_types: ['card'],
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: ['US', 'CO']
    },
    metadata: {
      userId: user.id,
      orderId: order?.id
    },
    line_items: [{ price: product.default_price as string, quantity: 1 }]
  })

  return { url: stripeSession.url }
}
