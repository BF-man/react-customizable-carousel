import React, { PureComponent } from 'react'

export const ARROW_TYPES = {
  prev: 'prev',
  next: 'next'
}

export class Arrow extends PureComponent {
  get cssClass () {
    const { className, arrowType } = this.props
    const safeArrowType = Object.keys(ARROW_TYPES).includes(arrowType) ? ARROW_TYPES[arrowType] : undefined
    const customClassName = !className ? '' : `${className} ${safeArrowType ? `${className}--${safeArrowType}` : ''}`
    return `rcc-Arrow ${safeArrowType ? `rcc-Arrow--${safeArrowType}` : ''} ${customClassName}`
  }
  render () {
    const { onClick, component, arrowType } = this.props
    const ArrowComponent = component
    return (
      <div className={this.cssClass} >
        <ArrowComponent onClick={onClick} arrowType={arrowType} />
      </div>
    )
  }
}
