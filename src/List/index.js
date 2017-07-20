import React, { PureComponent } from 'react'
import { withContentRect } from 'react-measure'
import { ListItems } from './ListItems'

export class List extends PureComponent {
  render () {
    const { items, measureRef, showItemsCount, contentRect: { bounds: { width } },
     currentIndex, direction, transitionDuration, translateX, scrollItems, onNext, onPrev,
       enableDragScroll } = this.props
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
          onNext={onNext}
          onPrev={onPrev}
          enableDragScroll={enableDragScroll}
        >
          {items}
        </ListItems>
      </div>
    )
  }
}

export default withContentRect('bounds')(List)
