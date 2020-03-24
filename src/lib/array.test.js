import { rotate, oddOccurrences } from './array'

describe('rotate', () => {
    test('rotate([3, 8, 9, 7, 6], 3) to equal [9, 7, 6, 3, 8]', () => {
        expect(rotate([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8])
    })

    test('rotate([0, 0, 0], 1) to equal [0, 0, 0]', () => {
        expect(rotate([0, 0, 0], 1)).toEqual([0, 0, 0])
    })

    test('rotate([1, 2, 3, 4], 4) to equal [1, 2, 3, 4]', () => {
        expect(rotate([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4])
    })

    test('rotate([], 1) to equal []', () => {
        expect(rotate([], 1)).toEqual([])
    })
})

describe('oddOccurrences', () => {
    test('oddOccurrences([9, 3, 9, 3, 9, 7, 9]) to equal 7', () => {
        expect(oddOccurrences([9, 3, 9, 3, 9, 7, 9])).toEqual(7)
    })
})
