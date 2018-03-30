var n = 19;
var A = new Array(n);

for (let i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 99);
}
document.write(A);

// Task 1. В одномерном массиве произвести такую замену: 
//         1 элемент поменять с 2 3 элемент поменять с 4 5 элемент поменять с 6 и тд 
//         Если массив непарный - последний элемент не трогать.

var buffer;
for (let i = 1; i < A.length; i += 2) {
    buffer = A[i - 1];
    A[i - 1] = A[i];
    A[i] = buffer;
}
document.write('<br />' + A);

// Task 2. В двумерном массиве A размером n на m. Заполнить случайными числами.
//         Найти ряд, где сумма элементов наименьшая
//         Найти ряд, где сумма элементов найбольшая

n = 5;
var m = 6;
var A = new Array(n);
var rowSumm = 0;
var minRowSumm, maxRowSumm, minRowPos, maxRowPos;

document.write('<br />');

for (let i = 0; i < A.length; i++) {
    A[i] = new Array(m);
    for (let j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 99);
        rowSumm += A[i][j];
    }
    console.log('Summ: ' + rowSumm + ' pos: ' + i);
    document.write('<br />' + A[i]);
    if (i == 0) {
        minRowSumm = rowSumm;
        maxRowSumm = rowSumm;
        minRowPos = 0;
        maxRowPos = 0;
    } else {
        if (minRowSumm > rowSumm) {
            minRowSumm = rowSumm;
            minRowPos = i;
        }
        if (maxRowSumm < rowSumm) {
            maxRowSumm = rowSumm;
            maxRowPos = i;
        }
    }
    rowSumm = 0;
}
console.log('minRowPos: ', minRowPos);
console.log('maxRowPos: ', maxRowPos);

// Поменять ряды местами (1 и 2 пункт)

var bufferArr = A[minRowPos].slice();
A[minRowPos] = A[maxRowPos].slice();
A[maxRowPos] = bufferArr.slice();
console.log(A);

