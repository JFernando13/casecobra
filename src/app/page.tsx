import { Underline } from '@/components/icons/Underline'
import { Reviews } from '@/components/reviews'
import { MaxWidthWrapper } from '@/components/wrapper/MaxWidthWrapper'
import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'
import { Phone } from '../components/Phone'
import { buttonVariants } from '../components/ui/button'

export default function Home() {
  return (
    <div className='bg-slate-50'>
      {/* <section> */}
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
        <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
            <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
              <img
                src='/images/snake-1.png'
                className='w-full'
                alt='logo snake'
              />
            </div>

            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl text-center'>
              Your image on a
              <span className='px-2 bg-green-600 text-white rounded-xl'>
                Custom
              </span>
              Phone Case
            </h1>

            <p className='mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap max-w-prose'>
              Capture your favorite memories with your own,
              <span className='font-semibold'>one-of-one</span> phone case.
              CaseCobra allows you to protect your memories, not your phone
              case.
            </p>

            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
              <div className='space-y-2'>
                <li className='flex items-center gap-1.5 text-left'>
                  <Check className='h-5 w-5 text-green-600 shrink-0' />
                  <p>High Quality, Durable Material</p>
                </li>
                <li className='flex items-center gap-1.5 text-left'>
                  <Check className='h-5 w-5 text-green-600 shrink-0' />
                  <p>5 year print guarantee</p>
                </li>
                <li className='flex items-center gap-1.5 text-left'>
                  <Check className='h-5 w-5 text-green-600 shrink-0' />
                  <p>Moder IPhone models supported</p>
                </li>
              </div>
            </ul>

            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
              <div className='flex -space-x-4'>
                <img
                  className='w-10 h-10 rounded-full inline-block ring-2 ring-slate-100'
                  src='/images/users/user-1.png'
                  alt='user'
                />
                <img
                  className='w-10 h-10 rounded-full inline-block ring-2 ring-slate-100'
                  src='/images/users/user-2.png'
                  alt='user'
                />
                <img
                  className='w-10 h-10 rounded-full inline-block ring-2 ring-slate-100'
                  src='/images/users/user-3.png'
                  alt='user'
                />
                <img
                  className='w-10 h-10 rounded-full inline-block ring-2 ring-slate-100'
                  src='/images/users/user-4.jpg'
                  alt='user'
                />
              </div>

              <div className='flex flex-col mt-4 justify-between items-center sm:items-start'>
                <div className='flex gap-0.5'>
                  <Star className='h-5 w-5 text-green-600 fill-green-600' />
                  <Star className='h-5 w-5 text-green-600 fill-green-600' />
                  <Star className='h-5 w-5 text-green-600 fill-green-600' />
                  <Star className='h-5 w-5 text-green-600 fill-green-600' />
                  <Star className='h-5 w-5 text-green-600 fill-green-600' />
                </div>

                <p>
                  <span className='font-semibold'>1250</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mt-20 lg:mx-0 h-fit'>
          <div className='relative md:max-w-xl'>
            <img
              className='absolute w-40 lg:w-52 left-52 -top-20 select-none sm:block lg:hidden xl:block'
              src='/images/your-image.png'
              alt='your image'
            />
            <img
              className='absolute w-20 -left-6 -bottom-6 select-none'
              src='/images/line.png'
              alt='line'
            />
            <Phone
              imgSrc='/images/testimonials/1.jpg'
              className='w-64'
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <section className='bg-slate-100 py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              What our
              <span className='relative px-2'>
                customers{' '}
                <Underline className='text-green-500 absolute -bottom-6 hidden sm:block pointer-events-none inset-x-0' />
              </span>
              says
            </h2>
            <img
              src='/images/snake-2.png'
              alt='snake 2'
              className='w-24 order-[0] lg:order-2'
            />
          </div>

          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16 '>
            <div className='flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  &quot;The case feel durable and I even a compliment on the
                  design. Had the case for two and a half months now{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    the imagen is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after couple weeks&quot;
                </p>
              </div>

              <div className='flex gap-4 mt-2'>
                <img
                  src='/images/users/user-1.png'
                  alt='testimonial 2'
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div className='flex flex-col '>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-zinc-600 text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  &quot;I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This is one besides a barely
                  noticeable scratch on the corner,{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    looks new brand after about half of year
                  </span>
                  . I dig it.&quot;
                </p>
              </div>

              <div className='flex gap-4 mt-2'>
                <img
                  src='/images/users/user-4.jpg'
                  alt='testimonial 2'
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div className='flex flex-col '>
                  <p className='font-semibold'>Juan</p>
                  <div className='flex gap-1.5 items-center'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-zinc-600 text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className='pt-16'>
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='font-bold text-balance text-5xl md:text-6xl tracking-tight !leading-tight text-center order-1 mt-2'>
                Upload your photo and get{' '}
                <span className='bg-green-600 text-white relative px-2'>
                  your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col md:grid grid-cols-2 gap-40 items-center'>
              <img
                src='/images/arrow.png'
                alt='arrow'
                className='md:rotate-0 rotate-90 absolute top-[25rem] md:top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2'
              />
              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/images/horse.jpg'
                  alt='horse img'
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone
                imgSrc='/images/horse_phone.jpg'
                className='w-60'
              />
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='w-5 h-5 text-green-600 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <Check className='w-5 h-5 text-green-600 inline mr-1.5' />
              Scratch- and figerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='w-5 h-5 text-green-600 inline mr-1.5' />
              Wireles charging compatible
            </li>
            <li className='w-fit'>
              <Check className='w-5 h-5 text-green-600 inline mr-1.5' />5 year
              print warranty
            </li>
          </ul>

          <div className='flex justify-center'>
            <Link
              href='/configure/upload'
              className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8'
              })}>
              Create your case now <ArrowRight className='h-4 w-4 ml-1' />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
