do {
    var radius = prompt('Input cylinder radius \n (value should be over the 0)', '');
}while((radius < 1 || !radius));
do {
    var height = prompt('Input cylinder height \n (value should be over the 0)', '');
}while((height < 1 || !radius));
square = Math.PI*Math.pow(radius,2);

document.write('<p>**************</p>');
document.write('<p>Обьем цилиндра с площадью основы *'+ square +',* радиусом *'+ radius +'* и высотой *'+ height + '* равен:</p>');
document.write('<p>--------------------</p>');
document.write('<p>V = '+ square*height +'.</p>');
document.write('<p>-------------------</p>');
document.write('<p>end.</p>');