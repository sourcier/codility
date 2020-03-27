import tapeEquilibrium from './TapeEquilibrium'

test('tapeEquilibrium([3, 1, 2, 4, 3]) to return 1', () => {
    expect(tapeEquilibrium([3, 1, 2, 4, 3])).toEqual(1)
})

test('tapeEquilibrium([1, 1]) to return 0', () => {
    expect(tapeEquilibrium([1, 1])).toEqual(0)
})

test('tapeEquilibrium([-1000, 1000]) to return 2000', () => {
    expect(tapeEquilibrium([-1000, 1000])).toEqual(2000)
})

test('tapeEquilibrium([1, 2, 3, 4, 2]) to return 0', () => {
    expect(tapeEquilibrium([1, 2, 3, 4, 2])).toEqual(0)
})
