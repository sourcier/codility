import FrogRiverOne from './FrogRiverOne'

test('Example - frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4]) -> returns 6', () => {
    expect(FrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6)
})

test('Simple - frogRiverOne(5, []) -> returns -1', () => {
    expect(FrogRiverOne(5, [])).toEqual(-1)
})

test('Extreme = frogRiverOne(2, [2, 2, 2, 2, 2]) -> return -1', () => {
    expect(FrogRiverOne(2, [2, 2, 2, 2, 2])).toEqual(-1)
})

test('Single - frogRiverOne(1, [1]) -> returns 0', () => {
    expect(FrogRiverOne(1, [1])).toEqual(0)
})
