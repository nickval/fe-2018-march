var A = [],
    B = [],
    C = [],
    n = 0;

// Написать функцию заполнения двумерного массива. Имя произвольное.

function fillArray(n) {
    let arr = [];
    for (let i = 0; i < n; i += 1) {
        arr[i] = [];
        for (let j = 0; j < n; j += 1) {
            arr[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return arr;
}

do {
    n = +prompt();
} while (isNaN(n) || n <= 0);

A = fillArray(n);

console.log(A);

/* 
 * написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов.
 * Тот массив, сумма которого большая - должен вернутся функцией.
 */

function compareArr(arr1, arr2) {

    if (!Array.isArray(arr1) ||
        !Array.isArray(arr2)) {
        return null;
    }

    function sumNumbers(arrNumb) {
        let sum = 0;
        for (let i = 0; i < arrNumb.length; i += 1) {
            sum += isNaN(arrNumb[i]) || typeof arrNumb[i] !== "number" ? 0 : arrNumb[i];
        }
        return sum;
    }

    let sum1 = 0,
        sum2 = 0;

    sum1 = sumNumbers(arr1);
    sum2 = sumNumbers(arr2);

    if (sum1 >= sum2) {
        console.log(sum1);
        return arr1;
    } else {
        console.log(sum2);
        return arr2;
    }
}

B = [1, 3, 5, 'sf', 3, 'gsdfg', 'g45', 't3', 35];
C = [576, 4, 6456, "i22", '45', 777, 345, 2354];

console.log(compareArr(B, C));