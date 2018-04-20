// var number = 20;
// var arr = new Array(number);

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = new Array(number);
// }

// var n = arr.length;
// // console.log(arr, n);
// var cent = Math.ceil(n / 2) - 1;
// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//         if ((i + j <= n - 1) && (i <= cent)) {
//             arr[i][j] = 1;
//         } else if ((i >= j + cent + 1) || 
//                 ((i + j <= cent + n -1) &&
//                 i >= cent &&
//                 j >= cent)) {
//             arr[i][j] = 1;
//         } else {
//             arr[i][j] = 0;
//         }

//         document.write(arr[i][j] + ' ');
//     }
//     document.write('<br />');
// }

var number = 20;
var arr = new Array(number);

for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(number);
}

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        arr[i][j] = Math.floor(Math.random() * 81 - 42);
    }
}

var min = arr[0][0];
var minPosI = 0;
var minPosJ = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (min > arr[i][j]) {
            min = arr[i][j];
            minPosI = i;
            minPosJ = j;
        }
    }
}

console.log(arr);
debugger;
console.log('min ', min, ' posI ', minPosI, ' posJ ', minPosJ);

var tmp = arr[0][0];
arr[0][0] = arr[minPosI][minPosJ];
arr[minPosI][minPosJ] = tmp;
console.log(arr);
