import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  repeat?: number
}

function Skeleton({ repeat = 1, className, ...props }: SkeletonProps) {
  return [...Array(repeat)].map((_item, index) => (
    <div key={index} className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
  ))
}

export { Skeleton }
