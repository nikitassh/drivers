import type { TDriverItem, TDriverList } from '@features/types'

export type State = {
  drivers: TDriverList
}

export type Actions = {
  add: (driver: TDriverItem) => void
}
