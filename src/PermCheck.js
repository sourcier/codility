export default function(A) {
    const set = new Set([...A])

    if(set.size !== A.length) return 0

    const sortedArray = [...set].sort((a, b) => a - b)
    const maxNumber = sortedArray[sortedArray.length - 1]
    const expectedSum = (maxNumber * (maxNumber + 1)) / 2
    const actualSum = sortedArray.reduce((cv, pv) => cv + pv)

    return actualSum === expectedSum ? 1 : 0
}
