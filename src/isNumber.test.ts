import { describe, expect, test } from '@jest/globals'
import { isNumber, isNumbers } from './isNumber'

describe('is-number', () => {
  test('isNumber', async () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber('kyon')).toBe(false)
    expect(isNumber([1])).toBe(false)
  })
  test('isNumbers', async () => {
    expect(isNumbers([1, 2, 3])).toBe(true)
    expect(isNumbers(['mikuru', 'nagato'])).toBe(false)
    expect(isNumbers('itsuki')).toBe(false)
  })
})
