var a;

do{
    a = +prompt('Input a:',);
}while(isNaN(a) || a <= 0);

var star = '*';
var space = '&nbsp';

for (var i = 1; i <= a; i++){
    for (var j = 1; j <= i; j++){
        if (j == 1 || j == i || i == a) {
            document.write(star);
        } else {
            document.write(space);
        }
    }
    document.write('<br />');
}