import { StyledTag } from './Tag.style'
import { ITagProps } from './Tag.types'

export const Tag = ({ className, variant, ...props }: ITagProps) => {
  return (
    <StyledTag className={className} variant={variant} {...props}></StyledTag>
  )
}
