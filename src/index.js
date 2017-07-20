import React, { PureComponent, Children } from 'react'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import List from './List'
import { Arrow, ARROW_TYPES } from './Arrow'
import { Dots } from './Dots'
import { DIRECTIONS } from './constants'

export class Carousel extends PureComponent {
  state = { currentIndex: 0, dotsIndex: 0, translateX: 0, inTransition: false, scrollItems: 1 }
  handleNextClick = () => {
    const { currentIndex, inTransition, scrollItems } = this.state
    const { children, infinite, transitionDuration, showItemsCount } = this.props
    const childrenCount = Children.count(children)
    let nextIndex = currentIndex === childrenCount - 1 ? 0 : currentIndex + 1

    if (inTransition || !infinite && currentIndex > childrenCount - 1 - showItemsCount || childrenCount < showItemsCount) return

    this.setState({ currentIndex, scrollItems, direction: DIRECTIONS.next, transitionDuration, translateX: undefined, inTransition: true })
    setTimeout(() => (
      this.setState({
        currentIndex: nextIndex,
        dotsIndex: nextIndex,
        translateX: 0,
        transitionDuration: 0,
        inTransition: false
      })), transitionDuration * 1000)
  }
  handlePrevClick = () => {
    const { currentIndex, inTransition, scrollItems } = this.state
    const { infinite, children, transitionDuration, showItemsCount } = this.props
    const childrenCount = Children.count(children)
    const nextIndex = currentIndex === 0 ? childrenCount - 1 : currentIndex - 1

    if (inTransition || !infinite && currentIndex === 0 || childrenCount < showItemsCount) return

    this.setState({ currentIndex, scrollItems, direction: DIRECTIONS.prev, transitionDuration, translateX: undefined, inTransition: true })
    setTimeout(() => (
      this.setState({
        currentIndex: nextIndex,
        dotsIndex: nextIndex,
        translateX: 0,
        transitionDuration: 0,
        inTransition: false
      })), transitionDuration * 1000)
  }
  handleDotClick = (index) => {
    const { currentIndex, inTransition, scrollItems } = this.state
    const { transitionDuration, showItemsCount, children, infinite } = this.props
    const childrenCount = Children.count(children)
    const nextIndex = !infinite && index > childrenCount - showItemsCount ? childrenCount - showItemsCount : index
    const difference = currentIndex - nextIndex
    const direction = difference > 0 ? DIRECTIONS.prev : DIRECTIONS.next

    if (inTransition || index === currentIndex) return this.setState({ dotsIndex: index })
    if (nextIndex === currentIndex) return this.setState({ dotsIndex: index })

    this.setState({ direction, scrollItems: Math.abs(difference), transitionDuration, translateX: undefined, inTransition: true })
    setTimeout(() => (
      this.setState({
        currentIndex: nextIndex,
        dotsIndex: index,
        scrollItems,
        translateX: 0,
        transitionDuration: 0,
        inTransition: false
      })), transitionDuration * 1000)
  }
  render () {
    const { children, showItemsCount, nextArrow, prevArrow, ArrowWrapperClassName,
      showDots, dot, dotWrapperClassName, dotsWrapperClassName, enableDragScroll } = this.props
    const { currentIndex, direction, transitionDuration, translateX, scrollItems, dotsIndex } = this.state
    return (
      <div className='rcc-Carousel'>
        <Arrow
          arrowType={ARROW_TYPES.prev}
          className={ArrowWrapperClassName}
          onClick={this.handlePrevClick}
          component={prevArrow}
        />
        <List
          items={children}
          currentIndex={currentIndex}
          showItemsCount={showItemsCount}
          direction={direction}
          transitionDuration={transitionDuration}
          translateX={translateX}
          scrollItems={scrollItems}
          onNext={this.handleNextClick}
          onPrev={this.handlePrevClick}
          enableDragScroll={enableDragScroll}
        />
        <Arrow
          arrowType={ARROW_TYPES.next}
          className={ArrowWrapperClassName}
          onClick={this.handleNextClick}
          component={nextArrow}
        />
        {!showDots ? null : (
          <Dots
            onDotClick={this.handleDotClick}
            currentIndex={dotsIndex}
            itemsCount={children.length}
            dotComponent={dot}
            dotWrapperClassName={dotWrapperClassName}
            className={dotsWrapperClassName}
          />
        )}
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
  prevArrow: PrevArrow,
  showDots: false,
  enableDragScroll: true
}
