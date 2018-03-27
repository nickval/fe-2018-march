var a, b;

do{
    a = +prompt('Input a:',);
}while(isNaN(a) || a <= 0);

do{
    b = +prompt('Input b:',);
}while(isNaN(b) || b <= 0);

var star = '*';
var space = '&nbsp';


for (var i = 1; i <= b; i++){
    for (var j = 1; j <= a; j++){
        if (i == 1 || i == b || j == 1 || j == a){
            document.write(star);
        }else{
            document.write(space);
        }        
    }
    document.write('<br />');
}