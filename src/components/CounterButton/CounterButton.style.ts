import styled from 'styled-components'
import {
  ICounterButtonProps,
  IIconCounterButtonProps,
} from './CounterButton.types'
import { primaryBlack, primaryGray } from '@/GlobalStyle/colors'

const getVariantIcon = ({ icon }: IIconCounterButtonProps): string => {
  if (icon === 'minus') {
    return "url('./icons/minus.svg')"
  } else {
    return "url('./icons/plus.svg')"
  }
}

export const StyledCounterButton = styled.button<ICounterButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 220px;
  height: 56px;
  border: 1px solid ${primaryBlack};
  border-radius: 3px;
  padding: 19px 35px;
  font-size: 24px;
  background-color: transparent;
`
export const StyledCounterIconButton = styled.button<IIconCounterButtonProps>`
  border: none;
  background: transparent;

  &:disabled {
    span {
      cursor: not-allowed;
      background: ${primaryGray};
    }
  }

  span {
    cursor: pointer;
    display: inline-block;
    width: 18px;
    height: 18px;
    mask-image: ${getVariantIcon};
    background: ${primaryBlack};
  }
`
