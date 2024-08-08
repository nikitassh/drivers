import { motion } from 'framer-motion'
import './styles.css'
import type { Props } from './types'

export const DriverItem = ({ item }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -400, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 200, scale: 1.2 }}
      transition={{ duration: 1, type: 'spring' }}
      className="driver-item"
    >
      <span className="text-xl font-bold">{item.name}</span>
      <span className="text-lg">{item.phone}</span>
    </motion.div>
  )
}
