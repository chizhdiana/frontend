function SuperMath() {
    this.znak = {
        '+': function (x, y) {


            return x + y;
        },
        '/': function (x, y) {


            return x / y;
        },
        '*': function (x, y) {


            return x * y;
        },
        '-': function (x, y) {


            return x - y;
        }
    }

}
SuperMath.prototype.check = function (obj) {
    var value = obj;
    console.log(value);




    this.getObj = function () {

        return value;


    }
    if (typeof value.znak != 'string') {
        this.input();

    }

    for (var i in this.znak) {
        if (value.znak == i) {
            console.log(value.X, value.Y);
            return this.znak[i](value.X, value.Y);
                
        } 
        if(value.znak != i){
      this.input();

    }

    }
}

SuperMath.prototype.input = function () {
    alert('Incorrect value znak, try again');



}

console.log(p = new SuperMath());

console.log(p.check({ X: 30, Y: 2, znak: '/' }));
