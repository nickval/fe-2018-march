/* Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, 
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

/* Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта 
 * и возвращает новый, который состоит из свойство обоих обьектов (склеить). 
 * Если свойство повторяется, то взять значение второго обьекта
 * assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
 * assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
 */
let obj3 = {};

function assignObjects(obj1, obj2, flag) {
    if (obj1 != null && obj2 != null) {
        for (let key in obj1) {
            obj3[key] = obj1[key];
        }
        if (arguments.length === 2) {
            for (let key in obj2) {
                obj3[key] = obj2[key];
            }

            return obj3;
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