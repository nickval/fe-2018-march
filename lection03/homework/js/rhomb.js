var h;

do{
    h = +prompt('Input h (half of diagonal) (it should be odd number):',);
}while(!(!isNaN(h) && h >= 0 && h && h%2 != 0));

var star = '*';
var space = '&nbsp';

for (var i = 1; i < h * 2; i++){
    for (var j = 1; j < h * 2; j++){
        if (i <= h){
            if ((j == h - i + 1) || (j == h + i - 1)) {
                document.write(star);
            } else {
                document.write(space);
            }
        // }
        } else {
            if ((j == i - h + 1) || (j == 2* h - (i - h + 1))) {
                document.write(star);
            } else {
                document.write(space);
            }
        }
    }
    document.write('<br />');
}