import { HTMLAttributes } from 'react'

export interface ICounterButtonProps
  extends HTMLAttributes<HTMLButtonElement> {}

export interface IIconCounterButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  icon: 'plus' | 'minus'
}
