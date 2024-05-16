import { Steps } from '@/components/steps/Steps'
import { MaxWidthWrapper } from '@/components/wrapper'

export default function ConfigureLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      <Steps />
      {children}
    </MaxWidthWrapper>
  )
}
