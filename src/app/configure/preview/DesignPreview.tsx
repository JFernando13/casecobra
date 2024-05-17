'use client'

import { LoginModal } from '@/components/LoginModal'
import { Phone } from '@/components/Phone'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { cn, formatPrice } from '@/lib/utils'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import type { Configuration } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'
import { COLORS, MODELS } from '../design/constants'
import { BASE_PRICE, PRODUCT_PRICES } from '../design/constants/products'
import { createCheckoutSession } from './actions/actions'

interface Props {
  configuration: Configuration
}

export function DesignPreview({ configuration }: Props) {
  const router = useRouter()
  const [showConfetti, setShowConfetti] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const { user } = useKindeBrowserClient()

  useEffect(() => setShowConfetti(true), [])

  const handleCheckout = () => {
    if (user) {
      // create payment session
      createPaymentSession({ configId: configuration.id })
    } else {
      localStorage.setItem('configurationId', configuration.id)
      setIsLoginModalOpen(true)
    }
  }

  const { mutate: createPaymentSession, isPending } = useMutation({
    mutationKey: ['get-checkout-session'],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url)
      else throw new Error('Unable to retrieve payment URL')
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our. Please try again.',
        variant: 'destructive'
      })
    }
  })

  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === configuration.color
  )?.tw

  const modelLabel = MODELS.options.find(
    (supportedModel) => supportedModel.value === configuration.model
  )?.label

  let totalPrice = BASE_PRICE

  if (configuration.material === 'polycarbonate') {
    totalPrice += PRODUCT_PRICES.material.polycarbonate
  }

  if (configuration.finish === 'textured') {
    totalPrice += PRODUCT_PRICES.finish.textured
  }

  return (
    <>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 select-none overflow-hidden flex justify-center'>
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        setIsOpen={setIsLoginModalOpen}
      />

      <div className='mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-16 md:gap-x-8 lg:gap-x-12'>
        <div className='sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2'>
          <Phone
            imgSrc={configuration?.croppedImageUrl!}
            className={cn(`bg-${tw}`)}
          />
        </div>

        <div className='mt-6 sm:col-span-9 sm:mt-0 md:row-end-1'>
          <h3 className='text-3xl font-bold tracking-tight text-gray-900'>
            Your {modelLabel} Case
          </h3>

          <div className='mt-3 flex items-center gap-1.5 text-base'>
            <Check className='h-4 w-4 text-green-500' />
            In stock and ready to ship
          </div>
        </div>

        <div className='sm:col-span-12 md:col-span-9 text-base'>
          <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>
            <div>
              <p className='font-medium to-zinc-950'>Highlights</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from recycled materials</li>
                <li>5 year print warranty</li>
              </ol>
            </div>
            <div>
              <p className='font-medium to-zinc-950'>Highlights</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>High-quality, durable material</li>
                <li>Scratch- and figerprint resistant coating</li>
              </ol>
            </div>
          </div>

          <div className='mt-8'>
            <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
              <div className='flex items-center justify-between py-1 mt-2'>
                <p className='text-gray-600'>Base price</p>
                <p className='font-medium text-gray-900'>
                  {formatPrice(BASE_PRICE / 100)}
                </p>
              </div>

              {configuration.finish === 'textured' && (
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>Textured finish</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                  </p>
                </div>
              )}
              {configuration.material === 'polycarbonate' && (
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>Soft polycarbonate material</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                  </p>
                </div>
              )}

              <div className='mt-2 h-px bg-gray-200' />

              <div className='flex items-center justify-between py-1 mt-2'>
                <p className='text-gray-600'>Order total</p>
                <p className='font-medium text-gray-900'>
                  {formatPrice(totalPrice / 100)}
                </p>
              </div>
            </div>
          </div>

          <div className='mt-8 flex justify-end pb-12'>
            <Button
              isLoading={isPending}
              disabled={isPending}
              loadingText='Confirming order...'
              className='px-4 sm:px-6 lg:px-8'
              onClick={handleCheckout}>
              Check out
              <ArrowRight className='h-4 w-4 ml-1.5 inline' />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
