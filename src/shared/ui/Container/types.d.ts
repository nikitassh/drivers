import { HTMLProps, PropsWithChildren } from 'react'

export type Props = PropsWithChildren &
  Partial<{
    className: HTMLProps<HTMLElement['className']>
  }>
