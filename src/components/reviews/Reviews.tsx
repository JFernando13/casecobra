import { MaxWidthWrapper } from '@/components/wrapper'
import { ReviewGrid } from './ReviewGrid'

export function Reviews() {
  return (
    <MaxWidthWrapper className='relative max-w-5xl'>
      <img
        aria-hidden
        src='/images/what-people-are-buying.png'
        alt='people buying'
        className='absolute select-none hidden xl:block -left-32 top-1/3'
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  )
}
