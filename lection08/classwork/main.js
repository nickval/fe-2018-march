// var obj = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// }

// function convert(objIn) {
//     var prop;

//     for (var key in objIn) {
//         prop = objIn[key];
//         // console.log('key = ' + key + ', prop = ' + prop);

//         if (typeof prop === 'object') {

//             // console.log('object in = ' + objIn[key]);

//             for (var key2 in prop) {
//                 // console.log('key in = ' + key2);
//                 objIn[key2] = prop[key2];
//             }

//             delete objIn[key];
//         }
//     }
// }

// console.log('before -------------------');
// for (var key in obj) {
//     console.log(key + ' value = ' + obj[key]);
// }


// convert(obj);
// console.log('after --------------------');

// for (var key in obj) {
//     console.log(key + ' value = ' + obj[key]);
// }


function map(fn, array) {
    var newArr = [];
    for (var key in array) {
        newArr[key] = fn(key);
    }
    return newArr;
}

function square(x) {

    return x * x;
}

console.log(map(square, [1, 2, 3, 4, 5, 6]));
console.log(map(square, []));

