import React, { PureComponent } from 'react'

export class DotsDot extends PureComponent {
  handleClick = () => {
    const { onClick, index } = this.props
    onClick(index)
  }
  get cssClass () {
    const { className } = this.props
    return `rcc-Dot ${className || ''}`
  }
  render () {
    const { current, component } = this.props
    const CustomContent = component
    return (
      <span className={this.cssClass} onClick={this.handleClick}>
        {component ? <CustomContent current={current} /> : <DefaultContent current={current} />}
      </span>
    )
  }
}

const DefaultContent = ({ current }) => current
  ? <div className="rcc-Circle-icon rcc-Circle-icon--filled" />
  : <div className="rcc-Circle-icon" />
