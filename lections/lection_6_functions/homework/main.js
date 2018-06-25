// Написать функцию заполнения двумерного массива. Имя произвольное.

var a = new Array();

function fill(m, n) {

    for (i = 0; i < m; i++) {
        a[i] = new Array(m);

        for (j = 0; j < n; j++) {
            a[i][j] = Math.floor(Math.random() * 20);
        }

    }

}

fill(10, 12);
console.log('arr', a);

//написать функцию, которая примет как аргумент(параметр) 
//два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
//Тот массив, сумма которого большая - 
//должен вернутся функцией.

function foo(v,s){
    sum_v =0;
    sum_s =0;
    for(var i=0; i< v.length; i++){
        if(!isNaN(v[i])){
            sum_v += v[i];
          

        }
       
       
    }
    console.log('sum_v', sum_v);
    for(var j = 0; j< s.length; j++){
        if(!isNaN(s[j])){
            sum_s += s[j];
            

        }
       
    }
    console.log('sum_s', sum_s);
     
if(sum_s > sum_v){
    return s;
}else{
    return v;
}
}
console.log(foo([1,2,12,26, 't','t'], ['gh','j',1,3,4,5,6,7,7]));

//Написать функцию doMath(x, znak, y), 
//которая получает 3 аргумента: числа x и y, строку znak. 
//В переменной знак может быть: +, -, *, /, %, ^. 
//Вывести результат математического действия, 
//указанного в переменной znak.

function doMath(x, znak, y){
    switch(znak){
        case '+' :
        return x+ y;

        case '-':
        return x-y;

        case '*':
        return x*y;

        case '/':
        return x/y;

        case '%':
        return x%y;

        case '^':
        return x ^ y;
        default:
    alert('нет совпадений');

    }
}

console.log(doMath(6,'-', 8));

