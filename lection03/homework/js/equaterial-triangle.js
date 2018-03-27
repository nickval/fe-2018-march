var h;

do{
    h = +prompt('Input h (it should be an odd number):',);
}while(isNaN(h) || h <= 0 || h%2 == 0);

var star = '*';
var space = '&nbsp';

for (var i = 1; i <= h; i++){
    for (var j = 1; j < h * 2; j++){
        if ((j == h - i + 1) || (j == h + i - 1) || i == h) {
            document.write(star);
        } else {
            document.write(space);
        }
    }
    document.write('<br />');
}