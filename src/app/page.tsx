'use client'

import { Button, CounterButton } from '@/components'
import { Tag } from '@/components'

export default function Home() {
  return (
    <>
      <Button variant="filledRed">В корзину</Button>
      <Button variant="filledGray">В корзину</Button>
      <Button variant="filledBlack">Оставить заявку</Button>
      <Button variant="ghostRed" hasArrow>
        Показать еще
      </Button>
      <Button variant="ghostBlack" hasArrow>
        Показать еще
      </Button>
      <Tag variant="ghostBlack">фен щетка дайсон</Tag>
      <Tag variant="ghostRed">фен щетка дайсон</Tag>
      <CounterButton />
    </>
  )
}
