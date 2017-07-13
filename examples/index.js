import React from 'react'
import { render } from 'react-dom'
import { Carousel } from '../src'
import '../src/index.css'

const $root = document.getElementById('app')

render(
  <Carousel>
    <h1>Item 1</h1>
    <h1>Item 2</h1>
    <h1>Item 3</h1>
    <h1>Item 4</h1>
    <h1>Item 5</h1>
    <h1>Item 6</h1>
    <h1>Item 7</h1>
    <h1>Item 8</h1>
  </Carousel>,
  $root
)
