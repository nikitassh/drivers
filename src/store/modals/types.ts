export enum ModalName {
  DriverCreate = 'DRIVER_CREATE',
}

export type State = {
  name: ModalName | null
}

export type Actions = {
  setOpen: (state: State['name']) => void
  setClose: () => void
}
