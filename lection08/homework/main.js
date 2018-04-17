/* 1. Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, 
 * есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна 
 * принимать текст элемента, а вторым - массив, в котором делается поиск. 
 * Функция должна возвращать true или false.
 */

function inArray(str, arr) {
    if (str != null && Array.isArray(arr)) {

        for (let key in arr) {
            if (str === arr[key]) {

                return true;
            }
        }

        return false;
    }

    return null;
}

console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));

/* 2. Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта 
 * и возвращает новый, который состоит из свойство обоих обьектов (склеить). 
 * Если свойство повторяется, то взять значение второго обьекта
 * assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
 * assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
 */
let obj3 = {};

function assignObjects(obj1, obj2, flag) {
    flag = flag === true;
    console.log(`flag: ${flag}`);
    if (obj1 != null && obj2 != null) {
        for (let key in obj1) {
            obj3[key] = obj1[key];
        }
        if (arguments.length === 2) {
            for (let key in obj2) {
                obj3[key] = obj2[key];
            }

            return obj3;

/* 3. В задачу п.2 добавить 3ий аргумента flag, который является boolean. 
 * Если флаг true, тогда при наличии свойства в обоих объектов в результат 
 * пойдет значение из первого обьекта, false - из второго.
 * assignObjects({...}, {...}, false); 
 */

        } else if (arguments.length === 3 && typeof flag === 'boolean') {
            for (let key in obj2) {
                for (let existkey in obj3) {
                    if ((flag === false && key !== existkey) ||
                        (flag === true)) {
                        obj3[key] = obj2[key];
                    }
                }
            }

            return obj3;
        }
    }
/* Пункт 4. не выполнял, так как задача 2 тогда потеряется.
 * Но в примере видно что функция может работать и с двумя агрументами.
 */
    return null;
}

assignObjects({ x: 10, y: 20 }, { z: 30 });
console.log(obj3);

obj3 = {};
assignObjects({ x: 10 }, { x: 20, y: 30 });
console.log(obj3);

obj3 = {};
assignObjects({ x: 10 }, { x: 20, y: 30 }, true);
console.log(obj3);

obj3 = {};
assignObjects({ x: 10 }, { x: 20, y: 30 }, false);
console.log(obj3);