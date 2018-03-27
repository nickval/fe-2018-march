var h;

do{
    h = +prompt('Input h (diagonal) (it should be an even number):',);
}while(isNaN(h) || h <= 0 || h%2 != 0);

var star = '*';
var space = '&nbsp';
var mid = h / 2;

for (var i = 1; i < h; i++){
    for (var j = 1; j < h; j++){
        if (i <= mid){
            if ((j == mid - i + 1) || (j == mid + i - 1)) {
                document.write(star);
            } else {
                document.write(space);
            }
        // }
        } else {
            if ((j == i - mid + 1) || (j == h - (i - mid + 1))) {
                document.write(star);
            } else {
                document.write(space);
            }
        }
    }
    document.write('<br />');
}