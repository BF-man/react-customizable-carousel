import React, { Component, Children, cloneElement } from 'react'

export class ListItems extends Component {
  render () {
    const { children, itemWidth, translate } = this.props
    const clonedChildren = Children.map(children, function (child) {
      return cloneElement(child, { style: { width: itemWidth + 'px', display: 'inline-block' } })
    }, this)
    return (
      <div className='rcc-ListItems' style={{ width: '3000px', whiteSpace: 'nowrap', transform: `translate(${translate + 'px'})`, transitionDuration: '2s' }}>
        {clonedChildren}
      </div>
    )
  }
}
