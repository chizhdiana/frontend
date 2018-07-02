obj = { copy:copy,
   clear: clear, 
   doFunction: doFunction
};
   
   function doFunction(func, x, y){
       this.result =  func(x,y);
       return this;

    
   };



function clear(){
   return  this.result == 0;
};

function copy(buffer){
    this.buf = buffer;
};

function sum(x,y){
    return x+y;

};

function mul(x,y){
    return x*y;

};



console.log(obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3));

//Дана строка вида . 
//Сделайте из него текст 'varTextHello'.

var  str = 'var_text_hello';
var s = str.split('_');

var str1 = s.join('');
console.log(str1);

//Сделайте функцию inArray, которая определяет, 
//есть в массиве элемент с заданным текстом или нет. 
//Функция первым параметром должна принимать 
//текст элемента, а вторым - массив, 
//в котором делается поиск. 
//Функция должна возвращать true или false.
function inArray(foo,arr){
 
    for(i =0; i< arr.length; i++){
        var x = arr[i].indexOf(foo);
        if(arr[i]== x){
            
            return true;

        }else{
            return false;
        }

    }

}
console.log(inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh']))