export default function solution(A) {
    const sortedArray = A.slice().sort((a, b) => a - b)
    const output = 1

    if(!A.length) return output
    if(sortedArray[0] !== 1) return output

    const value = sortedArray.find((x, idx, src) => src[idx + 1] != x + 1)

    return value ? value + 1 : output
}
