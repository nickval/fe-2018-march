var A = [],
    buffer = 0,
    bufferArr = [],
    m = 6,
    maxRowPos = 0,
    maxRowSum = 0,
    minRowPos = 0,
    minRowSum = 0,
    n = 19,
    rowSum = 0;


for (let i = 0; i < n; i += 1) {
    A[i] = Math.floor(Math.random() * 99);
}
document.write(`${A}`);

/*
 * Task 1. В одномерном массиве произвести такую замену:
 *       1 элемент поменять с 2 3 элемент поменять с 4 5 элемент поменять
 *       с 6 и тд. Если массив непарный - последний элемент не трогать.
 */

for (let i = 1; i < A.length; i += 2) {
    buffer = A[i - 1];
    A[i - 1] = A[i];
    A[i] = buffer;
}
document.write(`<br />${A}`);

/*
 * Task 2. В двумерном массиве A размером n на m. Заполнить случайными числами.
 * Найти ряд, где сумма элементов наименьшая
 * Найти ряд, где сумма элементов найбольшая
 */
n = 5;
A = new Array(n);

document.write("<br />");

for (let i = 0; i < A.length; i += 1) {
    A[i] = new Array(m);
    for (let j = 0; j < A[i].length; j += 1) {
        A[i][j] = Math.floor(Math.random() * 99);
        rowSum += A[i][j];
    }
    console.log(`Sum: ${rowSum} pos: ${i}`);
    document.write(`<br /> ${A[i]}`);
    if (i === 0) {
        minRowSum = rowSum;
        maxRowSum = rowSum;
        minRowPos = 0;
        maxRowPos = 0;
    } else {
        if (minRowSum > rowSum) {
            minRowSum = rowSum;
            minRowPos = i;
        }
        if (maxRowSum < rowSum) {
            maxRowSum = rowSum;
            maxRowPos = i;
        }
    }
    rowSum = 0;
}
console.log(`minRowPos: ${minRowPos}`);
console.log(`maxRowPos: ${maxRowPos}`);

// Поменять ряды местами (1 и 2 пункт)

bufferArr = A[minRowPos];
A[minRowPos] = A[maxRowPos];
A[maxRowPos] = bufferArr;
document.write(`<br /><br /> Switching min row: ${minRowPos} 
                with max row: ${maxRowPos}<br />`);
for (let i = 0; i < A.length; i += 1) {
    document.write(`<br /> ${A[i]}`);
}