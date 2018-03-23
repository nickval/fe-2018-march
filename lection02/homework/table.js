document.write('<table border="1">');

for (var i = 0; i <= 100; i++){
    if (i%2 == 0){
        document.write('<tr><td>' + i + '</td></tr>');
    }
}

document.write('</table>');