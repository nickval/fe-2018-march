function doMath(x, znak, y) {
    
    if (!x || !znak || !y) {
        return;
    }
    if (znak == '+') {
        return x + y;
    }
    if (znak == '-') {
        return x - y;
    }
    if (znak == '*') {
        return x * y;
    }
    if (znak == '/') {
        return x / y;
    }
    if (znak == '%') {
        return x % y;
    }
    if (znak == '^') {
        return x ^ y;
    }
}

var x = +prompt('x');
var znak = prompt('znak');
var y = +prompt('y');

console.log(doMath(x, znak, y));