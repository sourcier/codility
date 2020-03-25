import frogJmp from './FrogJmp'

test('fromJump(10, 85, 30) to return 3', () => {
    expect(frogJmp(10, 85, 30)).toEqual(3)
})

test('fromJump(0, 50, 10) to return 3', () => {
    expect(frogJmp(0, 50, 10)).toEqual(5)
})
