// var arr = [2, 3, 8, -4, 3, 2];
// var min = arr[0];
// var minPos = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         minPos = i
//     }
// }

// console.log(arr);
// console.log('min element: ', min, ' position: ', minPos);

// var list = [];
// var val;

// do{
//     val = prompt();
//     if (val !== '!'){
//         list[list.length] = val;        
//     }
// }while(val != '!');

// console.log(list);

// var list = [];
// var val;

// do{
//     list[list.length] = prompt;            
// }while(list[list.length] != '!');

// console.log(list);

var n = 10;
var m = 30;

var A = new Array(n);

for (var i = 0; i < A.length; i++) {
    A[i] = new Array(m);
}

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 90 + 10);
        document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}

var sum = 0;

for (var i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
        for (var j = 0; j < A[i].length; j++) {
            sum += A[i][j];
            // if (i%2 === 0) {
            //     sum += A[i][j];
            // }
        }
    }
}

console.log(sum);