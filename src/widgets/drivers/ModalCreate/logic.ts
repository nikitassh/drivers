import { useDriversStore } from '@store/drivers'
import { useModalStore } from '@store/modals'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TInputs, TSubmitHandler } from './types'

export const useDriverCreateLogic = () => {
  const [isFocused, setIsFocused] = useState(false)
  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

  const openModal = useModalStore((state) => state.name)
  const closeModal = useModalStore((state) => state.setClose)
  const addDriver = useDriversStore((state) => state.add)

  const form = useForm<TInputs>()

  const onSubmit: TSubmitHandler = (data) => {
    addDriver(data)
    form.reset()
    closeModal()
  }

  // Fn closing modal after 10sec if no focus on form
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!isFocused) {
        closeModal()
      }
    }, 10000)

    return () => clearTimeout(timerId)
  }, [isFocused, openModal])

  // Callback fn which closing modal
  const escFunction = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && !isFocused) {
      closeModal()
    }
  }, [])

  // For control escape press, check deps
  useEffect(() => {
    document.addEventListener('keydown', escFunction)

    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [escFunction])

  return { form, onSubmit, onFocus, onBlur }
}
