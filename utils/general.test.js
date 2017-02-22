import { isNumber } from './general'

it('sorts data by given text property', () => {
  expect(isNumber(1)).toEqual(true)
  expect(isNumber('1')).toEqual(true)
  expect(isNumber('')).toEqual(false)
  expect(isNumber('a')).toEqual(false)
})
