import { sortArrayByProperty, sortArrayByMultipleProperties } from './arrays'

it('sorts data by given text property', () => {
  const data = [
    { name: 'Paul', age: 23 },
    { name: 'Barry', age: 35 },
    { name: 'Larry', age: 31 },
    { name: 'Beth', age: 28 },
  ]
  const sortedArray = data.sort(sortArrayByProperty('name'))
  const expectedResult = [
    { name: 'Barry', age: 35 },
    { name: 'Beth', age: 28 },
    { name: 'Larry', age: 31 },
    { name: 'Paul', age: 23 },
  ]
  expect(sortedArray).toEqual(expectedResult)
})

it('sorts data by given numeric property', () => {
  const data = [
    { name: 'Paul', age: 23 },
    { name: 'Barry', age: 35 },
    { name: 'Larry', age: 31 },
    { name: 'Beth', age: 28 },
  ]
  const sortedArray = data.sort(sortArrayByProperty('age'))
  const expectedResult = [
    { name: 'Paul', age: 23 },
    { name: 'Beth', age: 28 },
    { name: 'Larry', age: 31 },
    { name: 'Barry', age: 35 },
  ]
  expect(sortedArray).toEqual(expectedResult)
})

it('sorts data in descending order', () => {
  const data = [
    { name: 'Paul', age: 23 },
    { name: 'Barry', age: 35 },
    { name: 'Larry', age: 31 },
    { name: 'Beth', age: 28 },
  ]
  const sortedArray = data.sort(sortArrayByProperty('-name'))
  const expectedResult = [
    { name: 'Paul', age: 23 },
    { name: 'Larry', age: 31 },
    { name: 'Beth', age: 28 },
    { name: 'Barry', age: 35 },
  ]
  expect(sortedArray).toEqual(expectedResult)
})

it('sorts data by multiple properties', () => {
  const data = [
    { name: 'Paul', age: 23 },
    { name: 'Barry', age: 23 },
    { name: 'Larry', age: 23 },
    { name: 'Beth', age: 28 },
  ]
  const sortedArray = data.sort(sortArrayByMultipleProperties('age', 'name'))
  const expectedResult = [
    { name: 'Barry', age: 23 },
    { name: 'Larry', age: 23 },
    { name: 'Paul', age: 23 },
    { name: 'Beth', age: 28 },
  ]
  expect(sortedArray).toEqual(expectedResult)
})
