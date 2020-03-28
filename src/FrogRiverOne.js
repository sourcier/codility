export default function(X, A) {
    let sum = (X * ( X + 1)) / 2
    let comparisonSum = 0
    let matches = []
    let result = -1

    for(let i = 0, max = A.length; i < max; i++ ) {
        if(matches[A[i]]) continue
        matches[A[i]] = true
        comparisonSum += A[i]
        if(comparisonSum === sum) result = i
    }

    return result
}
