import React, { PureComponent } from 'react'

export const ARROW_TYPES = {
  prev: 'prev',
  next: 'next'
}

export class Arrow extends PureComponent {
  get cssClass () {
    const { className, arrowType } = this.props
    const customClassName = !className ? '' : `${className} ${arrowType ? `${className}--${arrowType}` : ''}`
    return `rcc-Arrow ${arrowType ? `rcc-Arrow--${arrowType}` : ''} ${customClassName}`
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
