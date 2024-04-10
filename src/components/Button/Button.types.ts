import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | 'filledBlack'
    | 'filledRed'
    | 'filledGray'
    | 'ghostBlack'
    | 'ghostRed'
  hasArrow?: boolean
}
