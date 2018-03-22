var a, b, h;
do {
    a = +prompt('a',);
    b = +prompt('b',);
    h = +prompt('h',);
}while ((isNaN(a) || isNaN(b) || isNaN(h) || a <= 0 || b <= 0 || h <= 0) || !(a <= b));
for (var i = a, sum = 0; i <= b; i+=h){
    for (var j = 1, fakt=1; j <=i; j++){
        fakt*=j;
    }
    console.log('fakt: ' + fakt);
    sum+=fakt;
}
console.log('fakt summ: ' + sum);
