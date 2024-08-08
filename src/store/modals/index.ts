import { create } from 'zustand'
import type { Actions, State } from './types'

const initialState = {
  name: null,
}

export const useModalStore = create<State & Actions>()((set) => ({
  ...initialState,

  setOpen: (name) => set({ name }),

  setClose: () => set({ name: null }),
}))
