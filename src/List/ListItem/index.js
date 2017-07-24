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
  get style3dDaw () {
    const { width, addItemsLeft, transitionDuration, effectOf3d: { dawStep } } = this.props
    const translate = `translate3d(${width * addItemsLeft * (-1)}px, ${dawStep + this.translateCoefficient * dawStep * 1}px, ${this.translateCoefficient}px)`
    const scale = `scale(${1.5 - 0.5 * Math.abs(this.translateCoefficient)})`
    return {
      width: `${width}px`,
      display: 'inline-block',
      transform: `perspective(1000px) ${translate} ${scale}`,
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
