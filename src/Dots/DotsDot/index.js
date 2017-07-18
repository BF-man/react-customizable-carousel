import React, { PureComponent } from 'react'
import FaCircle from 'react-icons/lib/fa/circle'
import FaCircleO from 'react-icons/lib/fa/circle-o'

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

const DefaultContent = ({ current }) => current ? <FaCircle /> : <FaCircleO />
