import styled from 'styled-components'
import { ITagProps } from './Tag.types'
import { primaryBlack, primaryRed } from '@/GlobalStyle/colors'

const getTagColor = ({ variant }: ITagProps): string => {
  switch (variant) {
    case 'ghostBlack':
      return primaryBlack
    case 'ghostRed':
      return primaryRed
    default:
      return primaryBlack
  }
}

const getTagBorder = ({ variant }: ITagProps): string => {
  switch (variant) {
    case 'ghostBlack':
      return `1px solid ${primaryBlack}`
    case 'ghostRed':
      return `1px solid ${primaryRed}`
    default:
      return `1px solid ${primaryBlack}`
  }
}

export const StyledTag = styled.div<ITagProps>`
  display: inline-block;
  height: 38px;
  width: auto;
  padding: 6px 20px 7px 20px;
  border-radius: 31px;
  color: ${getTagColor};
  border: ${getTagBorder};
`
