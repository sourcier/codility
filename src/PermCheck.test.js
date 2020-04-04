import PermCheck from './PermCheck'

test('PermCheck([4, 1, 3, 2]) to return 1', () => {
    expect(PermCheck([4, 1, 3, 2])).toEqual(1)
})

test('PermCheck([4, 1, 3]) to return 0', () => {
    expect(PermCheck([4, 1, 3])).toEqual(0)
})

test('PermCheck([1]) to return 1', () => {
    expect(PermCheck([1])).toEqual(1)
})

test('PermCheck([9, 5, 7, 3, 2, 7, 3, 1, 10, 8]) to return 0', () => {
    expect(PermCheck([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])).toEqual(0)
})
