import { useModalStore } from '@store/modals'
import { ModalName } from '@store/modals/types'
import { Button } from '@ui'

export const DriversHeader = () => {
  const setOpen = useModalStore((state) => state.setOpen)

  const onOpen = () => {
    setOpen(ModalName.DriverCreate)
  }

  return (
    <div className="flex justify-between items-center my-4">
      <p className="text-3xl font-bold">Список водителей</p>

      <Button onClick={onOpen} title="Добавить водителя" />
    </div>
  )
}
