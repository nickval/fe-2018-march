var A = [1, 2, 3, 4, 5],
    B = [6, 5, 4, 3, 2, 1];

/*
 *   Функция должна вернуть массив из центральных элементов переданных массивов.
 *   Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3   
 *   Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4
 */

function getMidElement() {
    let arg = arguments,
        mid = [],
        midArray = 0;

    if (arg && arg.length === 1) {
        midArray = arg[0].length / 2;
        mid = arg[0].length % 2 === 0 ?
            arg[0].slice((midArray) - 1, midArray + 1) :
            arg[0].slice(Math.floor(midArray), Math.floor(midArray) + 1);

        return mid;
    } else {

        return null;
    }
}

function getMidElements() {
    let arg = arguments,
        arr = [];

    if (arg) {
        for (let i = 0; i < arg.length; i += 1) {
            if (Array.isArray(arg[i])) {
                arr.push(getMidElement(arg[i]));
            }
        }

        return arr;
    } else {

        return null;
    }
}

console.log(getMidElements(A, B));

/*
 * Написать функцию, которая получает 3 аргумента: два числа и функцию. 
 * Произвести вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power); 
 * в ответе должны получить 8, как 2 в степени 3.
 */

function doFunction() {
    if (arguments.length === 2 &&
        typeof arguments[0] === 'number' &&
        arguments[1].name === 'factorial') {

        return factorial(arguments[0]);
    } else if (arguments.length === 3 &&
               !isNaN(arguments[0]) &&
               !isNaN(arguments[1])) {

        return arguments[2](arguments[0], arguments[1]);
    } else {

        return null;
    }
}

function power(x, y) {
    if (!isNaN(x) && !isNaN(y)) {

        return Math.pow(x, y);
    } else {

        return null;
    }
}

console.log(`power: ${doFunction(2, 3, power)}`);

/* Из п.2 реализовать функции sum, div, mul, power */

function sum(x, y) {
    if (!isNaN(x) && !isNaN(y)) {

        return x + y;
    } else {

        return null;
    }
}

function div(x, y) {
    if (!isNaN(x) && !isNaN(y)) {

        return x / y;
    } else {

        return null;
    }
}

function mul(x, y) {
    if (!isNaN(x) && !isNaN(y)) {

        return x * y;
    } else {

        return null;
    }
}
console.log(`sum: ${doFunction(2, 3, sum)}`);
console.log(`div: ${doFunction(2, 3, div)}`);
console.log(`mul: ${doFunction(2, 3, mul)}`);

/*
 * Из п.2, если количество числовых аргументов равно единице
 * и переданная функция factorial - реализовать расчет факторикала.
 * doFunction(6, factorial);, в ответе поулчаем 6! = 720.
 */

function factorial(x) {
    if (x === 0){

        return 1;
    } else {

        return x * factorial(x - 1);
    }
}

console.log(`faktorial: ${doFunction(6, factorial)}`);