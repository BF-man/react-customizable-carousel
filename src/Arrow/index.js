import React, { PureComponent } from 'react'

export class Arrow extends PureComponent {
  get cssClass () {
    const { className, type } = this.props
    return `rcc-Arrow ${className || ''} ${type ? `rcc-Arrow--${type}` : ''}`
  }
  render () {
    const { onClick, children } = this.props
    return (
      <div className={this.cssClass} onClick={onClick}>
        {children}
      </div>
    )
  }
}
