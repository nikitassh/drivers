import { useModalStore } from '@store/modals'
import { ModalName } from '@store/modals/types'
import { Button, Modal } from '@ui'
import { AnimatePresence } from 'framer-motion'
import { useDriverCreateLogic } from './logic'

export const ModalDriverCreate = () => {
  const {
    form: { handleSubmit, register },
    onSubmit,
    onFocus,
    onBlur,
  } = useDriverCreateLogic()

  const openedModal = useModalStore((state) => state.name)

  return (
    <AnimatePresence initial={false}>
      {openedModal === ModalName.DriverCreate && (
        <Modal>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4">
            <input
              {...register('name')}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder="Воздуханов Воздухан Воздуханович"
            />

            <input
              {...register('phone')}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder="+7 123 456 78 90"
            />

            <Button title="Добавить водителя" type="submit" />
          </form>
        </Modal>
      )}
    </AnimatePresence>
  )
}
