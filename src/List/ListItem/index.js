import React, { Component } from 'react'

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
  render () {
    const { style, children, enableDragScroll } = this.props
    return (
      <div
        className='rcc-ListItem'
        style={style}
        draggable={`${enableDragScroll}`}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
      >
        {children}
      </div>
    )
  }
}
