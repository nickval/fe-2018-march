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

