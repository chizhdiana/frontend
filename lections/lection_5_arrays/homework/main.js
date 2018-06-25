<<<<<<< HEAD
// Task 1
//В одномерном массиве произвести такую замену: 
//1 элемент поменять с 2 3 элемент поменять с 4 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.

//было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

arr = [];
arr.lenght = 11;
m = 200;
n = 20;
for (i = 0; i < arr.lenght; i++) {
    arr[i] = Math.floor(Math.random() * (m - n) + n);

}
console.log('arr', arr)


if (arr.lenght % 2 != 1) {
    for (i = 0; i < arr.lenght; i += 2) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }


} else {
    for (i = 0; i <= arr.lenght; i += 2) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
=======
arr =[];
arr.lenght = 10;
m=200;
n= 20;
for(i=0; i<arr.lenght; i++){
    arr[i] = Math.floor(Math.random()*(m-n)+n);
>>>>>>> 37f93a4cf5a0ad7791e61f7f840ae44fc7abceba

}
console.log('arr', arr)

<<<<<<< HEAD

// Task 2
// двумерном массиве A размером n на m. Заполнить случайными числами.



n = 4; m = 15
var arr = new Array(n);
for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);

    for (j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random() * m)

    }


}

console.log(arr);

// Сумма по рядам

var arrsum = [];

for (i = 0; i < arr.length; i++) {
    sum = 0;
    for (j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];   

    }
    arrsum.push(sum)


}

console.log('Массив сумм ', arrsum);

//Найти ряд, где сумма элементов наименьшая
//Найти ряд, где сумма элементов найбольшая

var max = arrsum[0];
var min = arrsum[0];
indexMin = 0,
indexMax = 0;


for (i = 0; i < arrsum.length; i++) {


    if (arrsum[i] > max) {
        max = arrsum[i];
        arrsum[i] = max;
        indexMax = i;

    } else if (arrsum[i] < min) {
        min = arrsum[i];
        arrsum[i] = min;
        indexMin = i;
    }


//Поменять ряды местами (1 и 2 пункт)
    temp =max;
    max =min;
    min = temp;


}
console.log('индекс макс',indexMax);
console.log('индекс мин',indexMin);
console.log('мах на позиции min', max);
console.log('min на позиции max', min);








=======
for(i=0; i< arr.lenght; i+=2){
   
 
    temp =  arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
} 
console.log('arr', arr)
>>>>>>> 37f93a4cf5a0ad7791e61f7f840ae44fc7abceba
