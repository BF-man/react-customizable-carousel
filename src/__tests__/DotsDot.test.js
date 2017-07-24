import React from 'react'
import renderer from 'react-test-renderer'
import { DotsDot } from '../Dots/DotsDot'

test('DotsDot renders default component', () => {
  const component = renderer.create(
    <DotsDot />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('DotsDot renders custom component', () => {
  const component = renderer.create(
    <DotsDot component={() => <div>Custom component</div>} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('DotsDot adds customClassName ', () => {
  const component = renderer.create(
    <DotsDot className='customClassName' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
