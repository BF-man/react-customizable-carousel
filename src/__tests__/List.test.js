import React from 'react'
import { shallow } from 'enzyme'
import { List } from '../List'

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const list = shallow(
    <List contentRect={{ bounds: {} }}>
      <item1 />
      <item2 />
      <item3 />
    </List>
  )
  expect(list.find('ListItems')).toHaveLength(1)
  expect(list.find('item1')).toHaveLength(1)
})
