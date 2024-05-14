import { Phone } from '@/components/Phone'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'
import { POSSIBLE_ANIMATION_DELAYS } from './consts'

interface Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
}

export function Review({ imgSrc, className, ...props }: Props) {
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ]
  return (
    <div
      {...props}
      style={{ animationDelay }}
      className={cn(
        'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',
        className
      )}>
      <Phone imgSrc={imgSrc} />
    </div>
  )
}
