import { create } from 'zustand'
import type { Actions, State } from './types'

const initialState = {
  drivers: [],
}

export const useDriversStore = create<State & Actions>()((set) => ({
  ...initialState,

  add: (driver) => set((state) => ({ drivers: [...state.drivers, driver] })),
}))
