export const cloneArrayTimes = (array, times) => {
  let result = []
  const floorTimes = Math.floor(times)
  for (let i = 0; i < floorTimes; i++) {
    result = result.concat(array)
  }
  return result
}

export const cyclicArray = (array, fromIndex, toIndexIncluding) => {
  if (!array || array.length < 1) return []
  const length = array.length
  if (fromIndex >= 0 && toIndexIncluding <= length - 1) return array.slice(fromIndex, toIndexIncluding + 1)
  // exceeded left limit
  if (fromIndex < 0 && toIndexIncluding <= length - 1) {
    const replicateTimes = Math.floor((Math.abs(fromIndex) - 1) / length)
    return array.slice(fromIndex % length)
      .concat(cloneArrayTimes(array, replicateTimes))
      .concat(cyclicArray(array, 0, toIndexIncluding))
  }
  // exceeded right limit
  if (fromIndex >= 0 && toIndexIncluding > length - 1) {
    const replicateTimes = Math.floor(Math.abs(toIndexIncluding) / length) - 1
    return cyclicArray(array, fromIndex, length - 1)
      .concat(cloneArrayTimes(array, replicateTimes))
      .concat(cyclicArray(array, 0, toIndexIncluding % length))
  }
  // exceeded both limits
  if (fromIndex < 0 && toIndexIncluding > length - 1) {
    return cyclicArray(array, fromIndex, 0)
      .concat(cyclicArray(array, 1, toIndexIncluding))
  }
}
