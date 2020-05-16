 function countPrimes(n) {
    let count = 0
    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
            count++
        }
    }

    function isPrime(num) {
        for(let j = 2; j * j <= num; j++) {
            if(num % j == 0) {
                return false
            }
        }
        return true
    }

    return count
}

function countPrimes_2(n) {
    let isPrime = Array(n).fill(true)
    for(let i = 2; i < n; i++) {
        if(isPrime[i]) {
            for(let j = 2 * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }

    let count = 0

    for(let i = 2; i < n; i++) {
        if(isPrime[i]) {
            count++
        }
    }

    return count
}

function countPrimes_3(n) {
    let isPrime = Array(n).fill(true)
    for(let i = 2; i * i < n; i++) {
        if(isPrime[i]) {
            for(let j = 2 * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }

    let count = 0

    for(let i = 2; i < n; i++) {
        if(isPrime[i]) {
            count++
        }
    }

    return count
}

function countPrimes_4(n) {
    let isPrime = Array(n).fill(true)

    for(let i = 2; i * i < n; i++) {
        if(isPrime[i]) {
            for(let j = i * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }

    let count = 0

    for(let i = 2; i < n; i++) {
        if(isPrime[i]) {
            count++
        }
    }

    return count
}

console.log(countPrimes_4(499979))
