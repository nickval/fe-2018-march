var obj = {
    a: 12,
    b: 15,
    c: 19,
}

function renderObject() {
    for (var key in this) {

        if (this[key] != arguments.callee) {
            document.write(key + ':' + this[key] + ', ');
        }
    }

}

obj.renderObject = renderObject;
obj.renderObject();

//-------------------------------------

var data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello'
}

function addRecord() {
    var arg = arguments,
    last = arg[arg.length -1];
        
    var flag = typeof last === 'boolean' ? last : false;

    for(var i = 0; i < arg.length; i++ ) {
        if (typeof arg[i] === 'boolean') {
            continue;
        }
        console.log(arg[i]);
        for(var key in arg[i]){
            if (flag && arg[key]) {
                continue;
            }

            this[key] = arg[i][key];
        }

    }
}


data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
data.x;
console.log(data);