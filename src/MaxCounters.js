export default function(N, A) {
    let counters = Array(N).fill(0)
    let previousMaxCounter = 0
    let maxCounter = 0
    const increase = x => x += 1
    const maxValue = arr => Math.max(...counters)

    for(let i = 0, max = A.length; i < max; i++) {
        const X = A[i]
        if(X < N + 1) {
            let key = X - 1
            counters[key] = increase(counters[key])
            if(maxCounter < counters[key]) maxCounter = counters[key]
            continue
        }

        if(maxCounter === previousMaxCounter) continue

        counters.fill(maxCounter)
        previousMaxCounter = maxCounter
    }

    return counters
}
