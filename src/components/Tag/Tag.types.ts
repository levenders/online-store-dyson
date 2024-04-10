import { HTMLAttributes } from 'react'

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'ghostBlack' | 'ghostRed'
}
