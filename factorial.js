function factorial (a) {
    if(a < 0) {
        return ("go away")

    }
    if (a === 0) {
        return 1
    }
else {
    return a * factorial (a-1)
}
}
console.log(factorial(5))