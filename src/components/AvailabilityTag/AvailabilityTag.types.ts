import { HTMLAttributes } from 'react'

export interface IAvailabilityTagProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'inStock' | 'outOfStock'
}
