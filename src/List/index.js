import React, { PureComponent } from 'react'
import { ListItems } from './ListItems'
import { withContentRect } from 'react-measure'

export class List extends PureComponent {
  render () {
    const { items, measureRef, showItemsCount, contentRect: { bounds: { width } },
     currentIndex, direction, transitionDuration, translateX } = this.props
    const itemWidth = width / showItemsCount
    const translateByDirection = direction === 'prev' ? itemWidth : (-1) * itemWidth
    return (
      <div className='rcc-List' ref={measureRef}>
        <ListItems
          itemWidth={itemWidth}
          showItemsCount={showItemsCount}
          currentIndex={currentIndex}
          direction={direction}
          transitionDuration={transitionDuration}
          translateX={translateX === 0 ? 0 : translateByDirection}
        >
          {items}
        </ListItems>
      </div>
    )
  }
}

export default withContentRect('bounds')(List)
