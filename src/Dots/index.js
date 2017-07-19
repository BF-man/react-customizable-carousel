import React, { PureComponent } from 'react'
import { DotsDot } from './DotsDot'

export class Dots extends PureComponent {
  get cssClass () {
    const { className } = this.props
    return `rcc-Dots ${className || ''}`
  }
  render () {
    const { onDotClick, currentIndex, itemsCount, dotComponent, dotWrapperClassName } = this.props
    const indexes = [...Array(itemsCount).keys()]
    return (
      <div className={this.cssClass} >
        {indexes.map(index => (
          <DotsDot
            key={index}
            index={index}
            component={dotComponent}
            onClick={onDotClick}
            current={currentIndex === index}
            className={dotWrapperClassName}
          />
        ))}
      </div>
    )
  }
}
