do {
    var radius = prompt('Input cylinder radius', '');
}while((radius < 1 || radius == null));
do {
    var height = prompt('Input cylinder height', '');
}while((height < 1 || height == null));
square = Math.PI*Math.pow(radius,2);

document.write('<p>**************</p>');
document.write('<p>Обьем цилиндра с площадью основы *'+ square +',* радиусом *'+ radius +'* и высотой *'+ height + '* равен:</p>');
document.write('<p>--------------------</p>');
document.write('<p>V = '+ square*height +'.</p>');
document.write('<p>-------------------</p>');
document.write('<p>end.</p>');