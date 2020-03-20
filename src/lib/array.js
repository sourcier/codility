export const rotate = (array, turns) => {
    if (!array.length) return array

    for (let i = 0; i < turns; i++) {
        array.unshift(array.pop())
    }

    return array
}
