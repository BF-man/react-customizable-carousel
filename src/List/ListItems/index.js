import React, { Component, Children, cloneElement } from 'react'

const ADD_ITEMS_LEFT = 1
const ADD_ITEMS_RIGHT = 1

export class ListItems extends Component {
  get preparedChildren () {
    const { currentIndex, showItemsCount, children } = this.props
    // at the beginning of the children array, should add last child to beginning
    if (currentIndex === 0) {
      return this.leftPadding(children).concat(children.slice(0, showItemsCount + ADD_ITEMS_RIGHT))
    }
    // approached right limit, should push more from the children array beginning
    if (currentIndex >= children.length - 1 - showItemsCount) {
      const restItems = children.slice(currentIndex - ADD_ITEMS_LEFT, currentIndex + showItemsCount + ADD_ITEMS_RIGHT)
      return restItems.concat(this.rightPadding(children, restItems.length))
    }
    // in the middle of the children array
    return children.slice(currentIndex - ADD_ITEMS_LEFT, currentIndex + showItemsCount + ADD_ITEMS_RIGHT)
  }
  get childrenStyle () {
    const { itemWidth } = this.props
    return {
      style: {
        width: `${itemWidth}px`,
        display: 'inline-block',
        transform: `translate(${itemWidth * (-1)}px)`
      }
    }
  }
  leftPadding (clonedChildren) {
    return clonedChildren.slice(-1 * ADD_ITEMS_LEFT)
  }
  rightPadding (clonedChildren, restItemsLength) {
    const { showItemsCount } = this.props
    if (restItemsLength - 1 > showItemsCount) return []
    return clonedChildren.slice(0, showItemsCount - restItemsLength + ADD_ITEMS_LEFT + ADD_ITEMS_RIGHT)
  }
  get style () {
    const { transitionDuration, translateX } = this.props
    return { transform: `translate(${translateX + 'px'})`, transitionDuration: `${transitionDuration}s` }
  }
  cloneChildren (children, props) {
    return Children.map(children, function (child, index) {
      return cloneElement(child, { ...props, key: index })
    }, this)
  }
  render () {
    return (
      <div className='rcc-ListItems' style={this.style}>
        {this.cloneChildren(this.preparedChildren, this.childrenStyle)}
      </div>
    )
  }
}
