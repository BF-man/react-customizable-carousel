import React from 'react'
import renderer from 'react-test-renderer'
import { Dots } from '../Dots'

test('Dots renders itemsCount DotsDot components ', () => {
  const component = renderer.create(
    <Dots itemsCount={3} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Dots adds customClassName ', () => {
  const component = renderer.create(
    <Dots classname='customClassName' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
