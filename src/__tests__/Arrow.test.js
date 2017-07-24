import React from 'react'
import renderer from 'react-test-renderer'
import { Arrow } from '../Arrow'

test('Arrow renders component', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow adds proper arrow type - prev', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} arrowType='prev' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow adds proper arrow type - next', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} arrowType='next' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow does not add invalid arrow type - test', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} arrowType='test' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow adds custom className', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} className='customClassName' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow adds proper arrow type - next to customClassName', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} arrowType='next' className='customClassName' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow adds proper arrow type - prev to customClassName', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} arrowType='prev' className='customClassName' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Arrow does not add invalid arrow type - test', () => {
  const component = renderer.create(
    <Arrow component={() => <div>Arrow test</div>} arrowType='test' className='customClassName' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
