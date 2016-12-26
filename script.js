function fib(n) {
    if (n > 1) return fib(n - 1) + fib(n - 2)
    else return n
}

fib(6)