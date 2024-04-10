import styled from 'styled-components'
import { IAvailabilityTagProps } from './AvailabilityTag.types'
import { agreeGreen, disagreeRed } from '@/GlobalStyle/colors'

const getTagColorVariant = ({ variant }: IAvailabilityTagProps): string => {
  switch (variant) {
    case 'inStock':
      return agreeGreen
    case 'outOfStock':
      return disagreeRed
    default:
      return disagreeRed
  }
}

export const StyledAvailabilityTag = styled.div<IAvailabilityTagProps>`
  color: ${getTagColorVariant};

  span {
    display: inline-block;
    margin-right: 20px;
    width: 13px;
    height: 13px;
    mask-image: url('icons/circle.svg');
    background: ${getTagColorVariant};
  }
`
