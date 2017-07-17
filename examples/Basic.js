import React from 'react'
import { Carousel } from '../src'
import { TestItem } from './TestItem'
import '../src/index.css'

export const Basic = ({ title, itemsCount, ...props }) => (
  <div>
    <h1>{title}</h1>
    <Carousel {...props}>
      {items(itemsCount)}
    </Carousel>
  </div>
)

const items = (count) => {
  return Array(count).fill().map((e, i) => {
    return <TestItem key={i + 1} number={i + 1} />
  })
}
