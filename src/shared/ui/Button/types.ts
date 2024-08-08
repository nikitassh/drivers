import { MotionProps } from 'framer-motion'
import { ButtonHTMLAttributes } from 'react'

export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> &
  MotionProps &
  Required<{ title: string }> &
  Partial<{ type: 'submit' }>
