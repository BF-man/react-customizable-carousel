import React, { Component } from 'react'
import { DIRECTIONS, EFFECT_3D_NAMES } from '../../constants'

export class ListItem extends Component {
  handleDragEnd = (event) => {
    const { onNext, onPrev } = this.props
    const { dragXFrom } = this.state
    const { enableDragScroll } = this.props
    if (!enableDragScroll) return
    dragXFrom > event.clientX ? onNext() : onPrev()
  }

  handleDragStart = (event) => {
    const { enableDragScroll } = this.props
    if (!enableDragScroll) return
    this.setState({ dragXFrom: event.clientX })
    event.dataTransfer.setDragImage(document.createElement('div'), 0, 0)
  }

 // bigger in the middle, lower on the end an start
  get translateCoefficient () {
    const { direction, index, showItemsCount, inTransition } = this.props
    const multiplier = 0.5
    const z = (-1) * Math.abs(0 - index + (showItemsCount + 1) / 2) * multiplier
    if (!inTransition) return z
    const difference = direction === DIRECTIONS.prev ? -1 : 1

    return (-1) * Math.abs(0 - index + difference + (showItemsCount + 1) / 2) * multiplier
  }

  get style3d () {
    const { effectOf3d: { name } } = this.props
    switch (name) {
      case EFFECT_3D_NAMES.daw: return this.style3dDaw
      default: return this.style3dScale
    }
  }

  get style3dScale () {
    const { width, addItemsLeft, transitionDuration } = this.props
    const translate = `translate3d(${width * addItemsLeft * (-1)}px, ${0}px, ${this.translateCoefficient}px)`
    const scale = `scale(${1 / (Math.abs(this.translateCoefficient) + 1)})`
    return {
      width: `${width}px`,
      display: 'inline-block',
      transform: `perspective(1000px) ${translate} ${scale}`,
      transitionDuration: `${transitionDuration}s`
    }
  }

  // bigger in the middle, lower on the end an start
  get translateDawCoefficient () {
    const { direction, index, showItemsCount, inTransition } = this.props
    const multiplier = 0.5
    const z = (-1) * Math.abs(0 - index + (showItemsCount + 1) / 2) * multiplier
    if (!inTransition) return z
    const difference = direction === DIRECTIONS.prev ? -1 : 1

    return (-1) * Math.abs(0 - index + difference + (showItemsCount + 1) / 2) * multiplier
  }

  get translateDawY () {
    const { index, showItemsCount, inTransition, direction } = this.props
    // const multiplier = 0.5
    // const z = (-1) * Math.abs(0 - index + (showItemsCount + 1) / 2) * multiplier
    // if (!inTransition) return z
    // const difference = direction === DIRECTIONS.prev ? -1 : 1
    //
    // return (-1) * Math.abs(0 - index + difference + (showItemsCount + 1) / 2) * multiplier
    const middleIndex = (showItemsCount + 1) / 2
    const difference = direction === DIRECTIONS.prev ? -1 : 1
    if (inTransition) {
      const nextIndex = index - difference
      if (nextIndex === 1) return 0
      if (nextIndex === showItemsCount) return 0
      if (nextIndex <= middleIndex) return nextIndex / middleIndex
      if (nextIndex > middleIndex) return (showItemsCount - nextIndex) / middleIndex
    }
    if (index === 1) return 0
    if (index === showItemsCount) return 0
    if (index <= middleIndex) return index / middleIndex
    if (index > middleIndex) return (showItemsCount - index) / middleIndex
  }

  get style3dDaw () {
    const { width, addItemsLeft, transitionDuration, effectOf3d: { dawStep } } = this.props
    console.log(this.translateDawCoefficient)
    const scale = 2 - 0.5 * Math.abs(this.translateDawCoefficient)
    const translateX = width * addItemsLeft * (-1) // + this.translateDawCoefficient * width * addItemsLeft * (-1)
    const translateY = dawStep + this.translateDawY * dawStep
    const translate = `translate3d(${translateX}px, ${translateY}px, ${this.translateDawCoefficient}px)`
    const scaleStyle = `scale(${scale})`
    // const translate = `translate3d(${width * addItemsLeft * (-1)}px, ${dawStep + this.translateDawCoefficient * dawStep}px, ${this.translateCoefficient}px)`
    // const scale = `scale(${1 / (Math.abs(this.translateDawCoefficient) + 1)})`
    return {
      width: `${width}px`,
      display: 'inline-block',
      transform: `perspective(1000px) ${translate} ${scaleStyle}`,
      transitionDuration: `${transitionDuration}s`
    }
  }

  get style () {
    const { width, addItemsLeft, enable3d, transitionDuration } = this.props
    if (enable3d) return this.style3d
    return {
      width: `${width}px`,
      display: 'inline-block',
      transform: `translate(${width * addItemsLeft * (-1)}px)`,
      transitionDuration: `${transitionDuration}s`
    }
  }

  render () {
    const { children, enableDragScroll } = this.props
    return (
      <div
        className='rcc-ListItem'
        style={this.style}
        draggable={`${enableDragScroll}`}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
      >
        {children}
      </div>
    )
  }
}
