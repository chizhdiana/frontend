/*

+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/

window.onload = function () {
    var inputs = document.querySelectorAll(' .group');


    var textarea = document.querySelector('.textarea');

    var arr = [];

    for (var i = 0; i < inputs.length; i++) {
        arr.push(inputs[i].value);

        console.log(arr[i]);

        //arr.push(inputs[i].value)



    };
    setInterval(function () {
        //for(var i = 0; i < arr.length; i++){
        textarea.value = arr.join(',');
        // }
    }, 500);





}