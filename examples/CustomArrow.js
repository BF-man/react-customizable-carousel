import React, { PureComponent } from 'react'
import FaPiedPiperAlt from 'react-icons/lib/fa/pied-piper-alt'
import FaHeart from 'react-icons/lib/fa/heart'

export class CustomArrow extends PureComponent {
  render () {
    const { arrowType, ...props } = this.props
    return (
      <div className='rcc-CustomArrow' {...props}>
        {arrowType === 'next' ? <FaPiedPiperAlt /> : <FaHeart />}
      </div>
    )
  }
}
