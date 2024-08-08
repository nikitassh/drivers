import { cn } from '@lib/cn'
import type { Props } from './types'

export const Container = ({ children, className }: Props) => {
  return <div className={cn('container mx-auto px-4 md:px-0', className)}>{children}</div>
}
