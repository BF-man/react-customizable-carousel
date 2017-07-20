import React, { Component, Children, cloneElement } from 'react'
import { ListItem } from '../ListItem'
import { cyclicArray } from '../../helpers/cyclicArray'
import { DIRECTIONS } from '../../constants'

const ADD_ITEMS_LEFT = 1
const ADD_ITEMS_RIGHT = 1

export class ListItems extends Component {
  get addItemsLeft () {
    const { scrollItems, direction } = this.props
    return direction === DIRECTIONS.prev ? scrollItems : ADD_ITEMS_LEFT
  }
  get addItemsRight () {
    const { scrollItems, direction } = this.props
    return direction === DIRECTIONS.next ? scrollItems : ADD_ITEMS_RIGHT
  }
  get translateByDirection () {
    const { direction, itemWidth, scrollItems } = this.props
    return direction === DIRECTIONS.prev ? itemWidth * scrollItems : (-1) * itemWidth * scrollItems
  }
  get translateX () {
    const { translateX } = this.props
    return translateX === 0 ? 0 : this.translateByDirection
  }
  get preparedChildren () {
    const { currentIndex, showItemsCount, children } = this.props
    return cyclicArray(children, currentIndex - this.addItemsLeft, currentIndex + showItemsCount + this.addItemsRight - 1)
  }
  get childStyle () {
    const { itemWidth } = this.props
    return {
      width: `${itemWidth}px`,
      display: 'inline-block',
      transform: `translate(${itemWidth * this.addItemsLeft * (-1)}px)`
    }
  }
  get style () {
    const { transitionDuration } = this.props
    return { transform: `translate(${this.translateX + 'px'})`, transitionDuration: `${transitionDuration}s` }
  }
  cloneChildren (children, props) {
    return Children.map(children, function (child, index) {
      return cloneElement(child, { ...props, key: index })
    }, this)
  }
  render () {
    const { enableDragScroll, onNext, onPrev } = this.props
    return (
      <div className='rcc-ListItems' style={this.style}>
        {this.cloneChildren(this.preparedChildren).map((child, index) => {
          return (
            <ListItem
              className='rcc-ListItems-item'
              key={index}
              style={this.childStyle}
              onNext={onNext}
              onPrev={onPrev}
              enableDragScroll={enableDragScroll}
            >
              {child}
            </ListItem>
          )
        })}
      </div>
    )
  }
}
