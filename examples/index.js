import React from 'react'
import { render } from 'react-dom'
import { Basic } from './Basic'
import { CustomArrow } from './CustomArrow'
import './index.css'

const $root = document.getElementById('app')

const NextArrow = (props) => <CustomArrow type='next' {...props} />
const PrevArrow = (props) => <CustomArrow type='prev' {...props} />

render(
  <div>
    <Basic title='Basic' itemsCount={5} />
    <Basic title='Custom count' itemsCount={8} showItemsCount={5} />
    <Basic title='Custom transition duration' transitionDuration={2} itemsCount={5} />
    <Basic title='Infinite' itemsCount={5} infinite />
    <Basic title='Infinite 1000 items' itemsCount={1000} infinite />
    <Basic
      title='Custom Arrows'
      itemsCount={5}
      nextArrow={NextArrow}
      prevArrow={PrevArrow}
      ArrowWrapperClassName='rcc-CustomArrowWrapper'
    />
  </div>,
  $root
)
