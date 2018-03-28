do {
    var n = +prompt();
}while(isNaN(n) || n <= 0);

var A = new Array(n);
var B = new Array;
var min, max, posMax, posMin;

for (i = 0; i < n; i++) {
    A[i] = Math.floor(Math.random() * 999);
}

// // to verify finding prime number
// A[0] = 11;
// A[1] = 29;
// // to verify difference on 5 from min
// A[2] = 16;
// A[3] = 16;

console.log('Random nubers array: ',A);

min = A[0];
posMin = 0;
max = A[0];
posMax = 0;

for (i = 0; i < n; i++) {
    if (max < A[i]) {
        max = A[i];
        posMax = i;
    }
    if (min > A[i]) {
        min = A[i];
        posMin = i;
    }
    for (j = 2; j <= A[i]; j++) {
        if (A[i]%j == 0 && j < A[i]) {
            break;
        } else if (A[i]%j == 0 && j == A[i]){
            B[B.length] = A[i];
        } else {
            continue;
        }
    }
}

console.log('max = ' + max + '; min = ' + min);
// console.log(posMax, posMin)
console.log('Prime numbers array: ', B);

//Task 2

var C = new Array();
if (posMin < posMax) {
    for (var i = posMin; i <= posMax; i++){
        C[C.length] = A[i];
    }
} else {
    for (var i = posMax; i <= posMin; i++){
        C[C.length] = A[i];
    }
}

console.log('Array between min and max: ', C);

//Task 3
var tmp = A[posMin];
A[posMin] = A[posMax];
A[posMax] = tmp;

console.log('Array with replaced min and max: ', A);

//Task 4. Revese array
for (var i = 0; i <= A.length/2; i++) {
    tmp = A[i];
    A[i] = A[A.length - 1 - i];
    A[A.length - 1 - i] = tmp;
}

console.log('Reversed Array: ', A);

//Task 5
var numberElements = 0;
for (i = 0; i < A.length; i++) {
    if (A[i] == min +5) {
        numberElements++;
    }
}

console.log('Number of elements, different on 5 from min: ', numberElements);