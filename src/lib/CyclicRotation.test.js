import cyclicRotation from './CyclicRotation'

test('cyclicRotation([3, 8, 9, 7, 6], 3) to equal [9, 7, 6, 3, 8]', () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8])
})

test('cyclicRotation([0, 0, 0], 1) to equal [0, 0, 0]', () => {
    expect(cyclicRotation([0, 0, 0], 1)).toEqual([0, 0, 0])
})

test('cyclicRotation([1, 2, 3, 4], 4) to equal [1, 2, 3, 4]', () => {
    expect(cyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4])
})

test('cyclicRotation([], 1) to equal []', () => {
    expect(cyclicRotation([], 1)).toEqual([])
})
