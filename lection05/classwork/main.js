var arr = [1, 2, 3, 4, 5];

// 1.
var str = arr.join('_');
console.log(str);

// 2.
var arr2 = [6, 7, 2, 3, 5, 7];
document.write('<ul><li>' + arr2.join('</li><li>') + '</li></ul>');

// for (var i = 0; i < arr.length; i++) {
//     document.write('<li>' + arr[i] + '</li>');
// }
// document.write('</ul>');

// 3.
var arr3 = [5, 6, 43, 3, 436, 7, 87, 76, 45, 3];
console.log('3. array before: ', arr3);
var pos = Math.ceil(arr3.length / 2) - 1;
if (arr3.length % 2 == 0) {
    arr3.splice(pos, 2);
} else {
    arr.splice(pos, 1);
}
console.log('3. array after :', arr3);
