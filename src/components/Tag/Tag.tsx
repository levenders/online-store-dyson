import { StyledTag } from './Tag.style'
import { ITagProps } from './Tag.types'

export const Tag = ({ className, children, variant, ...props }: ITagProps) => {
  return (
    <StyledTag className={className} variant={variant} {...props}>
      {children}
    </StyledTag>
  )
}
