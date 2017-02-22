import {
  categoryFromPath,
  giTypeFilterFromPath,
  isOfGiType,
  giTypeDescr,
  giType,
} from './setup'

it('can get category from base category path', () => {
  const path = '/glycemic-index/beans/'
  const output = categoryFromPath(path)
  const expectedOutput = 'Beans'
  expect(output).toEqual(expectedOutput)
})

it('no category from base gi path', () => {
  const path = '/glycemic-index/low-gi/'
  const output = categoryFromPath(path)
  const expectedOutput = undefined
  expect(output).toEqual(expectedOutput)
})

it('can get category from gi type and category path', () => {
  const path = '/glycemic-index/low-gi/beans/'
  const output = categoryFromPath(path)
  const expectedOutput = 'Beans'
  expect(output).toEqual(expectedOutput)
})

it('can get gi type from base gi path', () => {
  const path = '/glycemic-index/low-gi/'
  const output = giTypeFilterFromPath(path)
  const expectedOutput = 'low-gi'
  expect(output).toEqual(expectedOutput)
})

it('no gi type from base category path', () => {
  const path = '/glycemic-index/beans/'
  const output = giTypeFilterFromPath(path)
  const expectedOutput = undefined
  expect(output).toEqual(expectedOutput)
})

it('can get gi type from gi type and category path', () => {
  const path = '/glycemic-index/low-gi/beans/'
  const output = giTypeFilterFromPath(path)
  const expectedOutput = 'low-gi'
  expect(output).toEqual(expectedOutput)
})

// GI TYPE DEFINITION:
// Low: Less than 56
// Medium: Between 56 and 69
// High: Greater than 69

it('can determine if is a particular gi type by value', () => {
  expect(isOfGiType(0, 'low-gi')).toBe(true)
  expect(isOfGiType(0, 'medium-gi')).toBe(false)
  expect(isOfGiType(0, 'high-gi')).toBe(false)

  expect(isOfGiType(55, 'low-gi')).toBe(true)
  expect(isOfGiType(55, 'medium-gi')).toBe(false)
  expect(isOfGiType(55, 'high-gi')).toBe(false)

  expect(isOfGiType(56, 'low-gi')).toBe(false)
  expect(isOfGiType(56, 'medium-gi')).toBe(true)
  expect(isOfGiType(56, 'high-gi')).toBe(false)

  expect(isOfGiType(69, 'low-gi')).toBe(false)
  expect(isOfGiType(69, 'medium-gi')).toBe(true)
  expect(isOfGiType(69, 'high-gi')).toBe(false)

  expect(isOfGiType(70, 'low-gi')).toBe(false)
  expect(isOfGiType(70, 'medium-gi')).toBe(false)
  expect(isOfGiType(70, 'high-gi')).toBe(true)

  expect(isOfGiType(100, 'low-gi')).toBe(false)
  expect(isOfGiType(100, 'medium-gi')).toBe(false)
  expect(isOfGiType(100, 'high-gi')).toBe(true)
})

it('gi type description from gi type value', () => {
  expect(giTypeDescr('low-gi')).toBe('Low')
  expect(giTypeDescr('medium-gi')).toBe('Medium')
  expect(giTypeDescr('high-gi')).toBe('High')
})

it('can determine gi type by value', () => {
  expect(giType(0)).toBe('low-gi')
  expect(giType(55)).toBe('low-gi')
  expect(giType(56)).toBe('medium-gi')
  expect(giType(69)).toBe('medium-gi')
  expect(giType(70)).toBe('high-gi')
  expect(giType(100)).toBe('high-gi')
})
