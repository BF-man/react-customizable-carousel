import React from 'react'
import { Carousel } from '../src'
import '../src/index.css'

const Employee1 = '//s3.amazonaws.com/kodep-site-staging/slides/images/000/000/009/medium/IMG_5868_copy.png?1473749711'
const Employee2 = '//s3.amazonaws.com/kodep-site-staging/slides/images/000/000/004/medium/IMG_5302.png?1473749404'
const Employee3 = '//s3.amazonaws.com/kodep-site-staging/slides/images/000/000/002/medium/IMG_5278_copy.png?1473749198'
const Employee4 = '//s3.amazonaws.com/kodep-site-staging/slides/images/000/000/007/medium/IMG_5378.png?1473749618'
const Employee5 = '//s3.amazonaws.com/kodep-site-staging/slides/images/000/000/008/medium/IMG_5388_copy.png?1473749660'
const Employee6 = '//s3.amazonaws.com/kodep-site-staging/slides/images/000/000/005/medium/IMG_5344_copy.png?1473749455'
const Employee7 = Employee6
const Employee8 = Employee6
const Employee9 = Employee6

export const Employees = ({ title, itemsCount, ...props }) => (
  <div>
    <h1>{title}</h1>
    <Carousel {...props} infinite showItemsCount={7}
      title='Employees 3d Mirrored Daw'
      enable3d
      effectOf3d={{ name: 'daw', dawStep: 150 }}
      listWrapperClassName='rcc-CatsList--manualHeight'
    >
      <Employee src={Employee1} draggable='false' />
      <Employee src={Employee2} draggable='false' />
      <Employee src={Employee3} draggable='false' />
      <Employee src={Employee4} draggable='false' />
      <Employee src={Employee5} draggable='false' />
      <Employee src={Employee6} draggable='false' />
      <Employee src={Employee7} draggable='false' />
      <Employee src={Employee8} draggable='false' />
      <Employee src={Employee9} draggable='false' />
    </Carousel>
  </div>
)

const Employee = ({ src }) => {
  return (
    <div className='rcc-Employee'>
      <img src={src} draggable='false' />
      <img className='rcc-Employee-reflection' src={src} draggable='false' />
    </div>
  )
}
