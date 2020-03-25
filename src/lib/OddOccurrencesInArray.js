export default (array) => {
    const sortedArray = array.slice().sort((a, b) => a - b)

    for (let i = 0; i < sortedArray.length; i += 2) {
        if (sortedArray[i] !== sortedArray[i + 1]) return sortedArray[i]
    }
}
