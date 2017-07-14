import React from 'react'

export const TestItem = ({ number, style }) => (
  <div className='rcc-TestItem' style={style}>
    <div className='rcc-TestItem-content'><div>Item {number}</div></div>
  </div>
)
