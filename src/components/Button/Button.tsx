import { IButtonProps } from './Button.types'

import { IconArrowSpan, StyledButton } from './Button.style'

export const Button = ({
  className,
  children,
  hasArrow,
  variant,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton className={className} variant={variant} {...props}>
      <span>{children}</span>
      {hasArrow && <IconArrowSpan />}
    </StyledButton>
  )
}
