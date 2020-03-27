export default function (A) {
    let total = A.reduce((pv, cv) => pv += cv)
    let upto = 0
    let min = Number.MAX_SAFE_INTEGER

    for(let i = 0, max = A.length - 1; i < max; i++) {
        upto += A[i]
        const diff = Math.abs(upto - (total - upto))
        if(diff < min) min = diff
    }

    return min
}
