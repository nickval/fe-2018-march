/* Есть обьект obj = { } Внутри него описываем методы copy, clear, doFunction. 
 * Организовать создание методов так, что бы можно было вызывать любые комбинации:
 * obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
 */

let obj = {
    copy: function(buffer) {
        console.log('copy');
        obj[buffer] = null;

        return this
    },
    clear: function() {
        this.result = 0;

        return this
    },
    doFunction: function() {
        let args = arguments,
            count = 0,
            func = '',            
            x = 0,
            y = 0;
        if (args.length === 3) {
            for (let i = 0; i < args.length; i++) {
                // debugger;
                if (typeof args[i] === 'function') {
                    func = args[i];
                } else if (typeof args[i] === 'number') {
                    if (count === 0) {
                        x = args[i];
                        count++;
                    } else {
                        y = args[i];
                    }
                }
            }
            this.result = typeof func === 'function' ? func(x, y) : 0;
        }

        return this
    },
    result: 0
}

function sum(x, y) {

    return x + y
}

function mul(x, y) {

    return x * y
}

console.log('09');
// obj.copy().copy();
obj.doFunction(sum, 2, 4).doFunction(6, mul, 3);
console.log(obj.result);

obj.doFunction(5, 6, sum).clear();
console.log(obj.result);

obj.doFunction(4, 5, mul).copy('kyky').copy('yep');
console.log(obj.result);

// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

let str = 'var_text_hello',
    // firstLetter = '',
    res = [],
    resStr = '';    

res = str.split('_');
for (let i = 0; i < res.length; i++) {
    if (i > 0) {
        resStr += res[i].slice(0 , 1).toUpperCase() + res[i].slice(1, res[i].length); 
    } else {
        resStr = res[i];
    }
}

console.log(resStr);

/* Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
 * Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
 * Функция должна возвращать true или false.
 * inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']) должно вернуть true, т.к. в affooasf есть совпадение.
 */

function inArray(textEl, arr) {
    let boolRes = false;
    for (let item in arr) {
        if (arr[item].search(textEl) != -1) {
            boolRes = true;
        }      
    }

    return boolRes
}

console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']));