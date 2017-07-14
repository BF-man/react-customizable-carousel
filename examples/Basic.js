import React from 'react'
import { Carousel } from '../src'
import { TestItem } from './TestItem'
import '../src/index.css'

export const Basic = ({ showItemsCount, itemsCount, title, infinite, transitionDuration }) => (
  <div>
    <h1>{title}</h1>
    <Carousel
      showItemsCount={showItemsCount}
      infinite={infinite}
      transitionDuration={transitionDuration}
    >
      {items(itemsCount)}
    </Carousel>
  </div>
)

const items = (count) => {
  return Array(count).fill().map((e, i) => {
    return <TestItem key={i + 1} number={i + 1} />
  })
}
