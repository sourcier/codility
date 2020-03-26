export default function(A, K) {
    if (!A.length) return A

    for (let i = 0; i < K; i++) {
        A.unshift(A.pop())
    }

    return A
}
