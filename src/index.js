import React, { PureComponent, Children } from 'react'
import List from './List'
import { Arrow, ARROW_TYPES } from './Arrow'
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
    const { children, showItemsCount, nextArrow, prevArrow, ArrowWrapperClassName } = this.props
    const { currentIndex, direction, transitionDuration, translateX } = this.state
    return (
      <div className='rcc-Carousel'>
        <Arrow
          arrowType={ARROW_TYPES.prev}
          className={ArrowWrapperClassName}
          onClick={this.handlePrevClick}
          component={prevArrow} />
        <List
          items={children}
          currentIndex={currentIndex}
          showItemsCount={showItemsCount}
          direction={direction}
          transitionDuration={transitionDuration}
          translateX={translateX} />
        <Arrow
          arrowType={ARROW_TYPES.next}
          className={ArrowWrapperClassName}
          onClick={this.handleNextClick}
          component={nextArrow} />
      </div>
    )
  }
}

const NextArrow = ({ onClick }) => <FaAngleRight onClick={onClick} />
const PrevArrow = ({ onClick }) => <FaAngleLeft onClick={onClick} />

Carousel.defaultProps = {
  transitionDuration: 0.5,
  showItemsCount: 3,
  nextArrow: NextArrow,
  prevArrow: PrevArrow
}
