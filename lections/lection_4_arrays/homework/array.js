
//Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];

//проверить все числа на простоту, и найденные простые числа сохранить в массив B.

var A = [];
var B = [];
A.length = 10;
var n = 20;
var m = 200;

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * (m - n)) + n;

}
console.log('A', A);

for (j = 0; j < A.length; j++) {
    //B = [];
    if (A[j] % 2 != 0) {

        res = A[j];

        B.push(res);
        // console.log(B)

    }

}

console.log('B', B);


//найти максимальное число и минимальное число.

var max = A[0];
var min = A[0];

for (i = 0; i < A.length; i++) {

    if (A[i] > max) {
        max = A[i];

        A[i] = max;

    }
}
console.log('Max', max);


//
for (i = 0; i < A.length; i++) {

    if (A[i] < min) {
        min = A[i];


    }
}
console.log('Min', min);




// Task 2
//Элементы массива между min -- max записать в массив B. Массив взять из 1го задания

//var D= [];
for (i = 0; i < A.length; i++) {
    D = A.slice(min, max);

    if (A[i] >= min && A[i] <= max) {

        console.log('fgg' + min, max);



    } else if (A[i] >= max && A[i] <= min) {

        D = A.slice(max, min);

    }

    //


}
console.log('Apdated ', D);



// Task 3

// В массиве A поменять местами min и max. Массив взять из 2го задания

var b_min = B[0];
var b_max = B[0];

for (i = 0; i < B.length; i++) {
    if (B[i] > b_max) {
        b_max = B[i];


    }
    if (B[i] < b_min) {
        b_min = B[i];

    }

}

[b_min, b_max] = [b_max, b_min];


console.log('b_min', b_min);
console.log('b_max', b_max);




// Task 4
// Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).

for (i = A.length - 1; i > 0; i--) {
    console.log('Reversed A', A[i]);

}


//Определить количество элементов в заданном массиве, отличающихся от минимального на 5.
count = 0;
min = 10;
arr = [1, 2, 3, 4, 5, 10, 5, 15, 15, 10]


for (i = 0; i < arr.length; i++) {
    if (arr[i] == min + 5 || arr[i] == min - 5) {


        count++;

    }

}

console.log('count', count);


//Создать массивы А и В. Заполнить случайными числами. Найди все элементы которые повторяются в массивах А и Б. * Повторяющиеся элементы вырезать. (без использования splice)

A = [];
B = [];
A.length = 10;
B.length = 10;

current = 0;
m = 20;
n = 10;
for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * (m - n)) + n;

}
A.sort();


for (i = 0, j = i + 1; i < A.length, j < A.length; i++ , j++) {

    if (A[i] == A[j]) {
        console.log('delete', A[i]);
        delete A[i];


    }

    A.length--;

}


for (i = 0; i < B.length; i++) {
    B[i] = Math.floor(Math.random() * (m - n)) + n;

}


for (i = 0, j = i + 1; i < B.length, j < B.length; i++ , j++) {

    if (B[i] == B[j]) {
        console.log('delete', B[i]);
        delete B[i];



    }
    B.length--;

}
console.log('A', A);
console.log('B', B);


for (i = 0; i < A.length; i++) {

    for (j = 0; j < B.length; j++) {

        if (A[i] == B[j]) {
            delete A[i];
            delete B[j];

        }

    }

}
console.log('sorted A', A);
console.log('sorted B', B);






