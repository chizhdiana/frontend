var max =20;
var min =0;


var number =  Math.floor(Math.random()*(max - min)) + min;
console.log(number);

var 
res = +prompt('number');
switch(res){
    case number-5:
    alert('холодно');
     break;
    case number -2 :
    case number -4:
    console.log('тепло')
     break;
    case number-1:
    console.log('несите мне азот');
     break;
    default:
    ('try again!')
}

