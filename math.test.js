const { isPrime, reverseString } = require('./math');

describe('Pruebas de la función isPrime', () => {
    test('Debe devolver true para números primos', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(7)).toBe(true);
    });

    test('Debe devolver false para números no primos', () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(9)).toBe(false);
    });
});

describe('Pruebas de la función reverseString', () => {
    test('Debe invertir una cadena correctamente', () => {
        expect(reverseString('hola')).toBe('aloh');
        expect(reverseString('GitHub')).toBe('buHtiG');
    });

    test('Debe lanzar error si el argumento no es una cadena', () => {
        expect(() => reverseString(123)).toThrow('El argumento debe ser una cadena');
        expect(() => reverseString(null)).toThrow('El argumento debe ser una cadena');
    });
});
