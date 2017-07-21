import React, { PureComponent } from 'react'
import { withContentRect } from 'react-measure'
import { ListItems } from './ListItems'

export class List extends PureComponent {
  get cssClass () {
    const { className } = this.props
    return `rcc-List ${className || ''}`
  }
  render () {
    const { items, measureRef, showItemsCount, contentRect: { bounds: { width } },
     currentIndex, direction, transitionDuration, translateX, scrollItems, onNext, onPrev,
       enableDragScroll, enable3d, nextIndex, inTransition, effectOf3d } = this.props
    return (
      <div className={this.cssClass} ref={measureRef}>
        <ListItems
          itemWidth={width / showItemsCount}
          showItemsCount={showItemsCount}
          currentIndex={currentIndex}
          nextIndex={nextIndex}
          direction={direction}
          transitionDuration={transitionDuration}
          translateX={translateX}
          scrollItems={scrollItems}
          onNext={onNext}
          onPrev={onPrev}
          enableDragScroll={enableDragScroll}
          enable3d={enable3d}
          effectOf3d={effectOf3d}
          inTransition={inTransition}
        >
          {items}
        </ListItems>
      </div>
    )
  }
}

export default withContentRect('bounds')(List)
