// do{
//     var a = +prompt('a: ',);
//     var b = +prompt('b: ',);
// } while (isNaN(a) || isNaN(b));
// var digit = 0;
// for (var i = a; i <= b; i++){
//     i < 0 ? console.log(-i*i) : console.log(i*i); 
// }

// var a = 1, b = 15;
// document.write('<table border="1">');
// document.write('<tr>');
// document.write('<td>');
// for (var i = a; i <= b; i+=2){
//     document.write(i + ' ')
// }
// document.write('</td>');
// document.write('</tr>');
// document.write('<tr>');
// document.write('<td>');
// for (var i = a + 1; i <= b; i+=2){
//     document.write(i + ' ')
// }
// document.write('</td>');
// document.write('</tr>');


// document.write('</table>');
// var odd = '', even = '';

// for (var i = a; i <= b; i++){
//     i%2 == 0 ? even+=' ' + i : odd += ' ' + i;
// }

// document.write('<table border="1"><tr><td>');

// document.write(odd + "</td></tr><tr><td>" + even);

// document.write('</table></tr></td>');

do{
    var x = +prompt('x: ',);
} while (isNaN(x) || !x);

do{
    var y = +prompt('y: ',);
} while (isNaN(y) || !y);

console.log ('x= '+ x + '; y= ' + y);

var oddSum = 0;
var evenSum = 0;

if (x > y){
    for (var i = x; i >= y; i--){
        if (i%2 == 0){
            evenSum += i;
        }
    }
}else{
    for (var i = x; i <= y; i++){
        if (i%2){
            oddSum += i;
        }
    }
}

console.log('Odd summ: ' + oddSum);

console.log('Even summ: ' + evenSum);
