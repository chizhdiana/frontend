

//Функция должна вернуть массив из центральных элементов
// переданных массивов.

//Центральный элемент, это один центральный, 
//если массив по длине непарный [1, 2, 3, 4, 5] -> 3

//Центральный элемент, это пара центральных, 
//если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10, 11];

function x(a, b) {
    arr = [];

    if (a.length % 2 == 0) {
        center_a = a.length / 2 - 1;


        // console.log('center', a[center_a]);
        // console.log('center+1', a[center_a + 1]);
        arr.push(a[center_a], a[center_a + 1]);



    } else {
        center_a = Math.ceil(a.length / 2);

        arr.push(a[center_a]);

    }

    if (b.length % 2 != 1) {
        center_b = b.length / 2;

        arr.push(b[center_b], b[center_b + 1]);
    }
    else {
        center_b = Math.ceil(b.length / 2);
        arr.push(b[center_b]);


    }


    return arr;
}

console.log(x(arr1, arr2));


//Написать функцию, которая получает 3 аргумента: 
//два числа и функцию. 
//Произвести вызов переданной функции с двумя 
//аргументами числами. doFunction(2, 3, power); 
//в ответе должны получить 8, как 2 в степени 3.







function doFunction(a, b, fun) {
   
    return fun(a, b);
}





function power(x, n) {
    console.log('power:')
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}


//Из п.2 реализовать функции sum, div, mul, power

//doFunction(16, -23, mul); // 16*(-23)

function sum(x, n) {
   
console.log('sum:')
    return x+n;
}

function div(x, n) {
   
    console.log('div:')
    return x/n;
}

function mul(x, n) {
    console.log('mul:')

    return x*n;
}


//Из п.2, если количество числовых аргументов равно 
//единице и переданная функция factorial -
 //реализовать расчет факторикала. 
 //doFunction(6, factorial);, в ответе поулчаем 6! = 720. // arguments.length и typeof

 function doFunction(a, b, fun) {
     var count =0;
     var fact ;
    for(var i=0; i < arguments.length; i++){
        if(arguments[i] == factorial ){
          // var fact = arguments[i];
            //console.log('fact', fact);
            
            //return factorial()
            if(typeof arguments[i] ==='number' ){
                count++;
                
    
            }
            
        }

    }
    if( count ==1){
        return factorial();
    }
    else{
        return fun(a, b);
    }
    

    
}

console.log(doFunction(2,3, factorial));

function factorial(x){
    if(x ==0){
        return 1;
    }else{
        return x* factorial(x-1);
    }

}

//Написать функцию которая получает аргументами
// любое количество массивов. 
//fofoFunction([1, 2, 3], [3,6,3223], [2,8,5,7,457,457,4]). 
//Возвращает супер-массив, который состоит из всех элементов переданных массивов.
function fofoFunction(){
    var arr =[];
    for(var i=0; i< arguments.length; i++){
        for(var j =0 ; j<arguments[i].length; j++)
        arr.push(arguments[i][j]);
    }

    return arr;
}
console.log('fofoFunction',fofoFunction([1, 2, 3], [3,6,3223], [2,8,5,7,457,457,4]));

//Написать функцию итератор, 
//при каждом последующем обращении будет 
//возвращать next элемент.
// var step = factory([2, 8, 9, 2, 4]);



function factory(arr) {
    var i = 0;
    return function(){
        
    
        return arr[i++];
    }
}
var step = factory([2, 8, 9, 2, 4]);
console.log('step1',step());
console.log('step2',step());
console.log('step3',step());
console.log('step4',step());
console.log('step5',step());


//Адаптировать итератор из 2 задания под такой функционал
//step(callback);, где callback - функция с 1 аргументом.
function factory2(arr) {
    var i = 0;
    return function(f){
        
    
        return f(arr[i++]);
    }
}

function sqr(x) {
    return x*x;
}
var step = factory2([2, 8, 9, 2, 4]);
console.log('step6',step(sqr));

//Написать функцию getMaxs(args), 
//где args - любое количество массивов. 
//Функция должна вернуть максимумы 
//всех переданных массивов в виде строки, 
//через разделитель ,.


function getMaxs(args){
    var arr = [];
    var max=0;
    for(i=0; i < arguments.length; i++){
        for(var j =0; j< arguments[i].length; j++){
          if(arguments[i][j]> max){
              max = arguments[i][j];

          }
        }
        arr.push(max);
    }
    

    return arr.join(';');


}

console.log(getMaxs([1,2,3,4],[5,6,7,8],[7,8,9]));