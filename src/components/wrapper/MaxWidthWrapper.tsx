import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export function MaxWidthWrapper({ children, className }: Props) {
  return (
    <main
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </main>
  )
}
