export const rotate = (array, turns) => {
    if (!array.length) return array

    for (let i = 0; i < turns; i++) {
        array.unshift(array.pop())
    }

    return array
}

export const oddOccurrences = (array) => {
    const sortedArray = array.slice().sort((a, b) => a - b)

    for(let i = 0; i < sortedArray.length; i += 2) {
        if(sortedArray[i] !== sortedArray[i + 1]) return sortedArray[i]
    }
}
