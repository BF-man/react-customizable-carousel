import React, { PureComponent, Children } from 'react'
import List from './List'
import { Arrow } from './Arrow'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'

export class Carousel extends PureComponent {
  state = { currentIndex: 0, translateX: 0, inTransition: false }
  handleNextClick = () => {
    const { currentIndex, inTransition } = this.state
    const { children, infinite, transitionDuration, showItemsCount } = this.props
    const childrenCount = Children.count(children)
    let nextIndex = currentIndex === childrenCount - 1 ? 0 : currentIndex + 1

    if (inTransition || !infinite && currentIndex > childrenCount - 1 - showItemsCount || childrenCount < showItemsCount) return

    this.setState({ currentIndex, direction: 'next', transitionDuration, translateX: undefined, inTransition: true })
    setTimeout(() => this.setState({ currentIndex: nextIndex, translateX: 0, transitionDuration: 0, inTransition: false }), transitionDuration * 1000)
  }
  handlePrevClick = () => {
    const { currentIndex, inTransition } = this.state
    const { infinite, children, transitionDuration, showItemsCount } = this.props
    const childrenCount = Children.count(children)
    const nextIndex = currentIndex === 0 ? childrenCount - 1 : currentIndex - 1

    if (inTransition || !infinite && currentIndex === 0 || childrenCount < showItemsCount) return

    this.setState({ currentIndex, direction: 'prev', transitionDuration, translateX: undefined, inTransition: true })
    setTimeout(() => this.setState({ currentIndex: nextIndex, translateX: 0, transitionDuration: 0, inTransition: false }), transitionDuration * 1000)
  }
  render () {
    const { children, showItemsCount } = this.props
    const { currentIndex, direction, transitionDuration, translateX } = this.state
    return (
      <div className='rcc-Carousel'>
        <Arrow type='prev' onClick={this.handlePrevClick}><FaAngleLeft /></Arrow>
        <List
          items={children}
          currentIndex={currentIndex}
          showItemsCount={showItemsCount}
          direction={direction}
          transitionDuration={transitionDuration}
          translateX={translateX} />
        <Arrow type='next' onClick={this.handleNextClick}><FaAngleRight /></Arrow>
      </div>
    )
  }
}

Carousel.defaultProps = {
  transitionDuration: 0.5,
  showItemsCount: 3
}
