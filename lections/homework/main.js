
function level1(x) {
    this.x = x
   

};
// вернуть результат второго уровня

level1.prototype.Render = function (x) {
     this.x = x;
    return x;
};
//очистить результат
level1.prototype.Clear = function (x) {
    return this.x = 0;
}

level2.prototype = new level1();

function level2(x,y) {
    this.x = x ; 
    this.y = y;
   
    this.getX = function () {
        return x;
    }
    this.setX = function (value) {
       x = value;
    }

    this.getY = function () {
        return x;
    }
    this.setY = function (value) {
       x = value;
    }


};

level2.prototype.Sum = function (y, x) {

     var x = this.getX();
     var y = this.getY();
    
     var sum = x + y;

     var res = Math.pow(sum , 2);

    return res;

}
level2.prototype.Mul = function (y, x) {

    var x = this.getX();
    var y = this.getY();
   
    var mul = x * y;

    var res = Math.pow(mul , 2);

   return res;

}

level2.prototype.Div = function (y, x) {

    var x = this.getX();
    var y = this.getY();
   
    var div = x / y;

    var res = Math.pow(div , 2);

   return res;

}

level2.prototype.setValue = function (fun) {
    return  fun;
    
}

level3.prototype = new level2();


// третий уровень

function level3(arr) {
    this.arr = arr;
    this.min = 0;
    this.max = 50;
    this.lenght = 200;

    this.getArr = function () {
        return this.arr;
    }
    this.setArr = function (value) {
       arr = value;
    }
}


//перезаписать массив
level3.prototype.reInit = function () {
    var arr = this.getArr();

    for (var i = 0; i < this.lenght; i++) {
        arr[i] = Math.floor(Math.random() * (this.max + this.min)) - this.min;

    };
 return arr;
    
}

level4.prototype = new level3();

// четвертый уровень пустой, наследует все три

function level4() {

}





var l_4 = new level4();

var l_3 = new level3([1,2,2]);
console.log(l_3.getArr());
console.log(l_3.reInit());

var l_2 = new level2(5,1);

//console.log(l_2.setValue(l_2.Div()));

var l_1 = new level1(1);

console.log(l_1.Render(l_2.setValue(l_2.Mul())));

console.log(l_1.Clear());











