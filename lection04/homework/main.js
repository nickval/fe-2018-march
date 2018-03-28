do {
    var n = +prompt();
} while (isNaN(n) || n <= 0);

var A = new Array(n);

//Task 1. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 

for (let i = 0; i < n; i++) {
    A[i] = Math.floor(Math.random() * 999);
}

// // to verify finding prime number
// A[0] = 11;
// A[1] = 29;
// // to verify difference on 5 from min
// A[2] = 16;
// A[3] = 16;

console.log('Random numbers array: ', A);

//Task 1. i.  проверить все числа на простоту, и найденные простые числа сохранить в массив B.
//        ii. найти максимальное число и минимальное число. 

var B = [];
var min, max, posMax, posMin;
min = A[0];
posMin = 0;
max = A[0];
posMax = 0;

for (let i = 0; i < n; i++) {
    for (let j = 2; j <= A[i]; j++) {
        if (A[i] % j == 0) {
            if (j < A[i]) {
                break;
            } else if (j == A[i]) {
                B[B.length] = A[i];
            }
        }
    }
    if (max < A[i]) {
        max = A[i];
        posMax = i;
    }
    if (min > A[i]) {
        min = A[i];
        posMin = i;
    }
}

console.log('Prime numbers array: ', B);
console.log('max = ' + max + ' (pos: ' + posMax + '); min = ' + min + ' (pos: ' + posMin + ')');

//Task 2. Элементы массива между min -- max записать в массив B. Массив взять из 1го задания

var C = [];
if (posMin < posMax) {
    for (let i = posMin; i <= posMax; i++) {
        C[C.length] = A[i];
    }
} else {
    for (let i = posMax; i <= posMin; i++) {
        C[C.length] = A[i];
    }
}

console.log('Array between min and max: ', C);

//Task 3. В массиве A поменять местами min и max. Массив взять из 2го задания

var tmp = A[posMin];
A[posMin] = A[posMax];
A[posMax] = tmp;

console.log('Array with replaced min and max: ', A);

//Task 4. Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
//        Нельзя использовать стандартный метод reverse().

for (let i = 0; i <= A.length / 2; i++) {
    tmp = A[i];
    A[i] = A[A.length - 1 - i];
    A[A.length - 1 - i] = tmp;
}

console.log('Reversed Array: ', A);

//Task 5. Определить количество элементов в заданном массиве, отличающихся от минимального на 5.

var numberElements = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] == min + 5) {
        numberElements++;
    }
}

console.log('Number of elements, different on 5 from min: ', numberElements);