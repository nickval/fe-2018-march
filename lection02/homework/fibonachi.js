var n;
do {
    n = +prompt();
}while (isNaN(n) || n <= 0);
for (var i=1, fibNext=1, fibPrev=1; i<=n; i++)
{
    console.log(fibNext);
    fibPrev = fibNext - fibPrev; 
    fibNext = fibNext + fibPrev;
}