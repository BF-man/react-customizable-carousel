import React, { PureComponent } from 'react'
import { ListItems } from './ListItems'
import { withContentRect } from 'react-measure'
import './index.css'

export class List extends PureComponent {
  render () {
    const { items, measureRef, showItemsCount, contentRect: { bounds: { width } }, currentIndex } = this.props
    const itemWidth = width / showItemsCount
    const translate = currentIndex * itemWidth * (-1)
    return (
      <div className='rcc-List' ref={measureRef}>
        <ListItems itemWidth={itemWidth} translate={translate}>{items}</ListItems>
      </div>
    )
  }
}

List.defaultProps = {
  showItemsCount: 3
}

export default withContentRect('bounds')(List)
