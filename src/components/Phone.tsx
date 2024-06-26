import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

export function Phone({ className, imgSrc, dark }: Props) {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}>
      <img
        src={
          dark
            ? '/images/phone-template-dark-edges.png'
            : '/images/phone-template-white-edges.png'
        }
        className='pointer-events-none select-none z-50'
        alt='phone image'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          src={imgSrc}
          className='object-cover w-full h-full'
          alt='overlaying phone image'
        />
      </div>
    </div>
  )
}
