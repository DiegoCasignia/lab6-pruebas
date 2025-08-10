function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function reverseString(str) {
    if (typeof str !== 'string') throw new Error('El argumento debe ser una cadena');
    return str.split('').reverse().join('');
}

module.exports = { isPrime, reverseString };
