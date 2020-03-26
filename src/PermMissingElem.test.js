import permMissingElem from './PermMissingElem'

test('permMissingElem([2, 3, 1, 5]) to return 4', () => {
    expect(permMissingElem([2, 3, 1, 5])).toEqual(4)
})

test('permMissingElem([]) to return 1', () => {
    expect(permMissingElem([])).toEqual(1)
})

test('permMissingElem([1]) to return 2', () => {
    expect(permMissingElem([1])).toEqual(2)
})

test('permMissingElem([2]) to return 2', () => {
    expect(permMissingElem([2])).toEqual(1)
})

test('permMissingElem([1, 2]) to return 3', () => {
    expect(permMissingElem([1, 2])).toEqual(3)
})
