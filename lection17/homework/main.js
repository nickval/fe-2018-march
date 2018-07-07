//1st task pluck function
var characters = [
    { 'name': 'barney', 'age': 36, 'gender': 'male' },
    { 'name': 'fred', 'age': 40 }
];

let pluck = (arr, key) => arr.map(value => value[key]);


console.log(pluck(characters, 'name'));

//2nd task predicat

var input = [1, 2, 3, 4, 5, 6];
let filter = (arr, callback) => {
    let resArr = arr.filter((element) => element ? callback(element) === true : '');
            return resArr;

}

function isEven(x) { return x % 2 == 0; } // проверяет на четность

console.log(filter(input, isEven)); // [2, 4, 6]

//3rd task function count

function countProp(){
    return Object.keys(this).length;
}

characters.__proto__.count = countProp;

characters.forEach((item) => {
    item.__proto__.count = countProp;
    console.log(item.name, ' properies count: ', item.count());
});
console.log(characters);
