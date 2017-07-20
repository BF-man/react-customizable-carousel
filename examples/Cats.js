import React from 'react'
import { Carousel } from '../src'
import Cat1 from './images/cat1.jpg'
import Cat2 from './images/cat2.jpg'
import Cat3 from './images/cat3.jpg'
import Cat4 from './images/cat4.jpg'
import Cat6 from './images/cat6.jpg'
import '../src/index.css'

export const Cats = ({ title, itemsCount, ...props }) => (
  <div>
    <h1>{title}</h1>
    <Carousel {...props} infinite showItemsCount={5}>
      <img src={Cat1} draggable='false' />
      <img src={Cat2} draggable='false' />
      <img src={Cat3} draggable='false' />
      <img src={Cat4} draggable='false' />
      <img src={Cat6} draggable='false' />
    </Carousel>
  </div>
)
