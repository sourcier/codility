import MaxCounters from './MaxCounters'

test('MaxCounters(5, [3, 4, 4, 6, 1, 4, 4]) to return [3, 2, 2, 4, 2]', () => {
    expect(MaxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2])

})

test('MaxCounters(1, [1]) to return [1]', () => {
    expect(MaxCounters(1, [1])).toEqual([1])
})
