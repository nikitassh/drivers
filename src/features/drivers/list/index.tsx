import { useDriversStore } from '@store/drivers'
import { AnimatePresence } from 'framer-motion'
import { DriverItem } from '../item'

export const DriverList = () => {
  const drivers = useDriversStore((state) => state.drivers)

  if (!drivers.length) {
    return <p className="text-center text-xl font-semibold">Список пуст :(</p>
  }

  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 gap-y-4">
        {drivers.map((item, idx) => (
          // key=idx because the driver does't have a unique id
          <DriverItem key={idx} item={item} />
        ))}
      </div>
    </AnimatePresence>
  )
}
