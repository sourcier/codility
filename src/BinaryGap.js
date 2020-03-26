export default function solution(N) {
    const binaryRepresentation = N.toString(2)
    let zeroCount = 0
    let maxCount = 0

    for (let digit of binaryRepresentation) {
        if (digit === '0') {
            zeroCount += 1
        } else {
            maxCount = Math.max(zeroCount, maxCount)
            zeroCount = 0
        }
    }

    return maxCount
}
