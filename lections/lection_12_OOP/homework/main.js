function Field(width, height) { // constructor class field
    this.width = width;
    this.height = height;
    var arr = [];
    arr.length = this.width
    for (i = 0; i < arr.length; i++) {
        arr[i] = [];
        arr[i].length = this.height;
        for (j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;   }
    }
    this.getArr = function () {
        return arr;
    }
    this.setArr = function (value) {
        arr = value;
    }
}

Field.prototype.renderField = function () {//function RENDER
    var arr = this.getArr();
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            document.write(arr[i][j] + '  ');
        }
        document.write('<br />');
    }
    document.write('<hr />');
}

Field.prototype.clearField = function () {//function CLEAR
    var arr = this.getArr();
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if(arr[i][j]!= 0){
                arr[i][j] = 0;
            }   
        }
    }
    this.setArr(arr);
}
Field.prototype.changeSize = function () {

}

Person.prototype = Object.create(Field.prototype);// INHERIT


function Person(name, XPosition, YPosition) {//constructor class Person
    this.name = name;
    this.XPosition = XPosition;
    this.YPosition = YPosition;
    this.getXpositon = function () {
        return XPosition;
    }
    this.setXposition = function (value) {
        XPosition = value;
    }
    this.getYpositon = function () {
        return YPosition;
    }
    this.setYposition = function (value) {
        YPosition = value;
    }
};

Person.prototype.start = function (arr){// function START
    var x = this.getXpositon(); // как получить поле от родителя не передавая массив в  параметр?
    var y = this.getYpositon();
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i == y && j == x) {
                arr[i][j] = 'p'; 
           }
        }
    }
    return arr; 
};

Person.prototype.go = function (arr, direction, step) {// function GO
    var x = this.getXpositon();
    var y = this.getYpositon();
    var strategy = {
        bottom: function (step) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    if (i == y && j == x) {
                        arr[i][j] = 0;
                        arr[step][j] = step; 
                    }
                }
            }
        },
        left: function (step) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    if (i == y && j == x) {
                        arr[i][j] = 0;
                        arr[i][step] = step; 
                    }
                }
            }
        }
    }
    strategy[direction](step);
    return arr; 
}




var f = new Field(10, 10);
var p = new Person('name', 1, 3);
var field = f.getArr();


p.start(field); // person on field == start
f.renderField(); 
p.go(field, 'left', 5);// move 
f.renderField();
f.clearField();
f.renderField();


p.start(field); 
f.renderField(); 



