

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(key) {
    var arr = [];
    for (i = 0; i < this.length; i++) {
        for (var j in this[i]) {
            if (j == key) {
                arr.push(this[i][j]);
            }
        }
    }
    return arr;
}

var res = pluck.call(characters, 'name');




var input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    }
    return false
};

function filter(arr, f) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        // debugger
        if (f(i) == true) {
            res.push(i);
        }
    }
    return res;

}

var filterRes = filter(input, isEven);

function Obj(name, age, adress) {
    this.name = name;
    this.age = age;
    this.adress = adress;
}

Obj.prototype.count = function () {
    var values = 0;
    for (var i in this) {
     values++;
    }
    return values;
}
var Person = new Obj('name', 'adge', 'adress')

Person.count();



