var arr1 = [1, 2, 3],
    arr2 = [3, 6, 3223],
    arr3 = [2, 8, 5, 7, 457, 457, 4];

function fofoFunction() {
    var A = [];

    for (var i = 0; i < arguments.length; i++) {
        A = A.concat(arguments[i]);
    }
    return A;
}

console.log(fofoFunction(arr1, arr2, arr3));

function factory(arr) {
    var index = 0;

    return function (callback) {
        if (arr[index] && callback) {

            return callback(arr[index++]);
        } else if (arr[index] && !callback) {

            return arr[index++];
        } else {

            return console.log('Error');
        }
    }
}

var sqr = function (x) {
    return x * x;
}

var step = factory([2, 8, 9, 2, 4]);

console.log(step(sqr));
console.log(step());
console.log(step(sqr));
console.log(step(sqr));
console.log(step(sqr));

// -------------- 4)

function getMaxs() {
    var maxString = '';
    for (var i = 0; i < arguments.length; i++ ) {
        maxString += findMax(arguments[i]);
        if (i < arguments.length - 1){
            maxString += ', ';
        }
    }
    return maxString;
}

function findMax(arrR) {
    if (arrR) {
        var max = arrR[0];
        for (var i = 0; i < arrR.length; i++ ) {
            if (max < arrR[i]) {
                max = arrR[i];
            }
        }
        return max;
    } else {
        return null;
    }
}

console.log(getMaxs(arr1, arr2, arr3));

