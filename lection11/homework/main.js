var x=0;

function Level1(x) {
    function render(x) {
        console.log(x);
    }
    function clear(x) {
        x = 0;
    }
}

function Level2() {
    Level2.prototype = Object.create(Level1.prototype);
    function sum(val1, val2) {
        render(val1 + val2);
    }
}

function Level3() {

}

function Level4() {

}


var calc = new Level2();
console.dir(calc);
calc.sum(2, 3);
calc.render();
// console.log(calc.Sum(2, 3));