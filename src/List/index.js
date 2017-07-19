import React, { PureComponent } from 'react'
import { ListItems } from './ListItems'
import { withContentRect } from 'react-measure'

export class List extends PureComponent {
  render () {
    const { items, measureRef, showItemsCount, contentRect: { bounds: { width } },
     currentIndex, direction, transitionDuration, translateX, scrollItems } = this.props
    return (
      <div className='rcc-List' ref={measureRef}>
        <ListItems
          itemWidth={width / showItemsCount}
          showItemsCount={showItemsCount}
          currentIndex={currentIndex}
          direction={direction}
          transitionDuration={transitionDuration}
          translateX={translateX}
          scrollItems={scrollItems}
        >
          {items}
        </ListItems>
      </div>
    )
  }
}

export default withContentRect('bounds')(List)
