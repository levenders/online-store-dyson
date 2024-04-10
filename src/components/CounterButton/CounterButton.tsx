import { useState } from 'react'
import {
  StyledCounterButton,
  StyledCounterIconButton,
} from './CounterButton.style'
import { ICounterButtonProps } from './CounterButton.types'

export const CounterButton = ({ className, ...props }: ICounterButtonProps) => {
  const [count, setCount] = useState<number>(1)

  const addProductHandler = () => {
    setCount(count + 1)
  }

  const removeProductHandler = () => {
    count > 1 && setCount(count - 1)
  }

  return (
    <StyledCounterButton className={className} {...props}>
      <StyledCounterIconButton
        icon={'minus'}
        disabled={count > 1 ? false : true}
        onClick={removeProductHandler}
      >
        <span />
      </StyledCounterIconButton>
      {count}
      <StyledCounterIconButton icon="plus" onClick={addProductHandler}>
        <span />
      </StyledCounterIconButton>
    </StyledCounterButton>
  )
}
