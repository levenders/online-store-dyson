import styled from 'styled-components'
import { IButtonProps } from './Button.types'
import {
  primaryBlack,
  primaryRed,
  primaryGray,
  white,
} from '@/GlobalStyle/colors'

const getButtonBackground = ({ variant }: IButtonProps): string => {
  switch (variant) {
    case 'filledBlack':
      return primaryBlack
    case 'filledRed':
      return primaryRed
    case 'filledGray':
      return primaryGray
    case 'ghostBlack':
    case 'ghostRed':
      return 'transparent'
    default:
      return primaryBlack
  }
}

const getButtonColor = ({ variant }: IButtonProps): string => {
  switch (variant) {
    case 'ghostBlack':
      return primaryBlack
    case 'ghostRed':
      return primaryRed
    default:
      return white
  }
}

const getButtonBorder = ({ variant }: IButtonProps): string => {
  switch (variant) {
    case 'ghostBlack':
      return `3px solid ${primaryBlack}`
    case 'ghostRed':
      return `3px solid ${primaryRed}`
    default:
      return 'none'
  }
}

const getIconBackgroundColor = ({ variant }: IButtonProps): string => {
  switch (variant) {
    case 'ghostBlack':
      return primaryBlack
    case 'ghostRed':
      return primaryRed
    default:
      return 'inherit'
  }
}

export const IconArrowSpan = styled.span`
  display: inline-block;
  width: 27px;
  height: 25px;
  margin-left: 32.5px;
  mask-image: url('./icons/arrow.svg');
`

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15.5px 42.5px;
  height: 56px;
  border: none;
  font-family: var(--font-open-sans);
  border-radius: 3px;
  color: white;
  font-size: 24px;
  line-height: 32px;
  background: ${getButtonBackground};
  color: ${getButtonColor};
  border: ${getButtonBorder};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  ${IconArrowSpan} {
    background-color: ${getIconBackgroundColor};
  }
`
