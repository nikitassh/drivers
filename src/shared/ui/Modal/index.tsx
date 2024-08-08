import { useModalStore } from '@store/modals'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import { animation } from './animation'
import './styles.css'

export const Modal = ({ children }: PropsWithChildren) => {
  const setClose = useModalStore((state) => state.setClose)

  return (
    <motion.div
      onClick={setClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.dialog
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={animation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.dialog>
    </motion.div>
  )
}
