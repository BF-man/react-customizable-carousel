import React from 'react'
import { render } from 'react-dom'
import { Basic } from './Basic'
import './index.css'

const $root = document.getElementById('app')

render(
  <div>
    <Basic title='Basic' itemsCount={5} />
    <Basic title='Custom count' itemsCount={8} showItemsCount={5} />
    <Basic title='Custom transition duration' transitionDuration={2} itemsCount={5} />
    <Basic title='Infinite' itemsCount={5} infinite />
    <Basic title='Infinite 1000 items' itemsCount={1000} infinite />
  </div>,
  $root
)
