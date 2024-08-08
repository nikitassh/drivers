import { motion } from 'framer-motion'
import './styles.css'
import type { Props } from './types'

export const Button = ({ title, type, ...props }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="button"
      type={type || 'button'}
      {...props}
    >
      {title}
    </motion.button>
  )
}
