import { SubmitHandler } from 'react-hook-form'

export type TInputs = {
  name: string
  phone: string
}

export type TSubmitHandler = SubmitHandler<TInputs>
