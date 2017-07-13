import React, { PureComponent, Children } from 'react'
import List from './List'
import { Arrow } from './Arrow'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

export class Carousel extends PureComponent {
  state = { currentIndex: 0 }
  handleNextClick = () => {
    const { currentIndex, infinite } = this.state
    const { children } = this.props
    const childrenCount = Children.count(children)
    const nextIndex = currentIndex < childrenCount - 2 || infinite ? currentIndex + 1 : childrenCount - 1
    this.setState({ currentIndex: nextIndex })
  }
  handlePrevClick = () => {
    const { currentIndex, infinite } = this.state
    const nextIndex = currentIndex > 1 || infinite ? currentIndex - 1 : 0
    this.setState({ currentIndex: nextIndex })
  }
  render () {
    const { children } = this.props
    const { currentIndex } = this.state
    return (
      <div className='rcc-Carousel'>
        <Arrow type='prev' onClick={this.handlePrevClick}><FaAngleLeft /></Arrow>
        <List items={children} currentIndex={currentIndex} />
        <Arrow type='next' onClick={this.handleNextClick}><FaAngleRight /></Arrow>
      </div>
    )
  }
}
