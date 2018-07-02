//Сделайте функцию inArray
//('hello', ['svnj', 'hello', 'cvpoq']),
// которая определяет, есть в массиве элемент
// с заданным текстом или нет.
// Функция первым параметром должна принимать
// текст элемента, а вторым - массив, 
//в котором делается поиск. 
//Функция должна возвращать true или false.

function inArray(text, arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == text) {


            return true;
        }

    }
    return false;

}
console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));

//Написать функцию assignObjects(obj1, obj2), 
//которая принимает аргументами 2 обьекта 
//и возвращает новый, который состоит из свойство 
//обоих обьектов (склеить).
// Если свойство повторяется, 
//то взять значение второго обьекта


//В задачу п.3 из лекции добавить 3ий аргумента flag, 
//который является boolean. 
//Если флаг true, тогда при наличии свойства
// в обоих объектов в результат пойдет
// значение из первого обьекта, false - из второго.

//В задачу п.3, сделать параметр flag не обязательный,
// если параметр не передать - устанавливать значение false.


function assignObjects(obj1, obj2, flag) {
    if (flag === undefined) {
        flag = false;

    }
    for (var key1 in obj1) {
        newObj[key1] = obj1[key1];

        for (var key2 in obj2) {
            newObj[key2] = obj2[key2]
            if (flag == true && newObj[key1] == obj2[key2]) {
                newObj[key2] = obj1[key1];

            } else if (flag == false && newObj[key1] == obj2[key2]) {
                newObj[key1] = obj2[key2];
            }
        }


    }
    return newObj;

}

console.log('false', assignObjects({ x: 10 }, { x: 20, y: 30 }, false));
console.log('true', assignObjects({ x: 10 }, { x: 20, y: 30 }));
console.log(assignObjects({ z: 10 }, { x: 20, y: 30 }));



// Импользуя метод Object.assign:

function assignObjects(obj1, obj2, flag) {

    for (var i = 0; i < arguments.length; i++) {
        if (flag == false) {
            var newObj = Object.assign({}, obj1, obj2);

        } else if (flag == true) {
            var newObj = Object.assign({}, obj2, obj1);

        }

    }

    return newObj;

}

console.log(assignObjects({ x: 10, y: 20 }, { y: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));

