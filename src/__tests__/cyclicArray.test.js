import { cyclicArray, cloneArrayTimes } from '../helpers/cyclicArray'

const array = [0, 1, 2, 3, 4]

test('cyclicArray returns correct values with no exceeded limits', () => {
  expect(cyclicArray(array, 0, 0)).toEqual([0])
  expect(cyclicArray(array, 0, 1)).toEqual([0, 1])
  expect(cyclicArray(array, 0, 4)).toEqual([0, 1, 2, 3, 4])
})

test('cyclicArray returns correct values with exceeded right limits', () => {
  expect(cyclicArray(array, 0, 5)).toEqual([0, 1, 2, 3, 4, 0])
  expect(cyclicArray(array, 0, 9)).toEqual([0, 1, 2, 3, 4, 0, 1, 2, 3, 4])
  expect(cyclicArray(array, 0, 10)).toEqual([0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0])
})

test('cyclicArray returns correct values with exceeded left limits', () => {
  expect(cyclicArray(array, -1, 0)).toEqual([4, 0])
  expect(cyclicArray(array, -5, 0)).toEqual([0, 1, 2, 3, 4, 0])
  expect(cyclicArray(array, -6, 0)).toEqual([4, 0, 1, 2, 3, 4, 0])
  expect(cyclicArray(array, -10, 0)).toEqual([0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0])
  expect(cyclicArray(array, -11, 0)).toEqual([4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0])
})

test('cyclicArray returns correct values with exceeded both limits', () => {
  expect(cyclicArray(array, -1, 5)).toEqual([4, 0, 1, 2, 3, 4, 0])
  expect(cyclicArray(array, -6, 5)).toEqual([4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0])
})

test('cyclicArray returns correct values with indexeses < 0', () => {
  expect(cyclicArray(array, -2, -1)).toEqual([3, 4])
  expect(cyclicArray(array, -5, -1)).toEqual([0, 1, 2, 3, 4])
  expect(cyclicArray(array, -6, -1)).toEqual([4, 0, 1, 2, 3, 4])
})

test('cyclicArray returns correct values with indexeses > array.length - 1', () => {
  expect(cyclicArray(array, 5, 6)).toEqual([0, 1])
  expect(cyclicArray(array, 5, 9)).toEqual([0, 1, 2, 3, 4])
  expect(cyclicArray(array, 5, 10)).toEqual([0, 1, 2, 3, 4, 0])
})

test('cyclicArray returns empty array for empty array input', () => {
  expect(cyclicArray([], 0, 0)).toEqual([])
  expect(cyclicArray([], 0, 4)).toEqual([])
  expect(cyclicArray([], 0, 6)).toEqual([])
  expect(cyclicArray([], -1, 0)).toEqual([])
  expect(cyclicArray([], -10, 0)).toEqual([])
  expect(cyclicArray([], -10, 10)).toEqual([])
})

test('cloneArrayTimes returns correct values', () => {
  expect(cloneArrayTimes([], 0)).toEqual([])
  expect(cloneArrayTimes([], 1)).toEqual([])
  expect(cloneArrayTimes([], -1)).toEqual([])
  expect(cloneArrayTimes(array, -1)).toEqual([])
  expect(cloneArrayTimes(array, 0)).toEqual([])
  expect(cloneArrayTimes(array, 1)).toEqual(array)
  expect(cloneArrayTimes(array, 2)).toEqual(array.concat(array))
  expect(cloneArrayTimes(array, 2.1)).toEqual(array.concat(array))
})
