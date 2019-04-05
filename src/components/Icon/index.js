import React, { PureComponent } from 'react'

import chevronLeftIcon from './icons/chevron-left.svg'
import chevronRightIcon from './icons/chevron-right.svg'

export const ChevronLeftIcon = createIcon(chevronLeftIcon)
export const ChevronRightIcon = createIcon(chevronRightIcon)

function createIcon (icon) {
  return class Icon extends PureComponent {
    render () {
      return (
        <img src={icon} {...this.props} />
      )
    }
  }
}
