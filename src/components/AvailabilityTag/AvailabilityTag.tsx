import { StyledAvailabilityTag } from './AvailabilityTag.style'
import { IAvailabilityTagProps } from './AvailabilityTag.types'

export const AvailabilityTag = ({
  className,
  variant,
  children,
  ...props
}: IAvailabilityTagProps) => {
  return (
    <StyledAvailabilityTag className={className} variant={variant} {...props}>
      <span />
      {variant === 'inStock' ? 'В наличии' : 'Нет в наличии'}
    </StyledAvailabilityTag>
  )
}
