import React, { Component, Children, cloneElement } from 'react'

export class ListItems extends Component {
  render () {
    const { children, itemWidth, translate } = this.props
    const clonedChildren = Children.map(children, function (child) {
      return cloneElement(child, { style: { width: itemWidth + 'px', display: 'inline-block' } })
    }, this)
    return (
      <div className='rcc-ListItems' style={{ transform: `translate(${translate + 'px'})` }}>
        {clonedChildren}
      </div>
    )
  }
}
