

var S = +prompt('Input S ');
while(!S){
    if (S <= 0){
        alert('Your number is null,Pleas  try again');
        var S = +prompt('Input S ');
    }
        else if(!S){
        alert('is not a number, Pleas try again');
        var S = +prompt('Input S ');
        }


    }

var R = +prompt('Input R');

while(!R){
    if (R <= 0){
        alert('Your number is null,Pleas  try again');
        var R = +prompt('Input R ');
    }
        else if(!R){
        alert('is not a number, Pleas try again');
        var R = +prompt('Input R ');
        }

    }


var H = +prompt('Input H');

while(!H){

    if (H <= 0){
        alert('Your number is null,Pleas  try again');
        var H = +prompt('Input H ');
    }
        else if(!H){
        alert('is not a number, Pleas try again');
        var H = +prompt('Input H ');
        }
       

    }
var radius = Math.pow(R, R) ;
console.log(radius);
var res=  Math.PI * radius * H;
console.log(res);

document.write('**************  <br \/> ');
document.writeln('Обьем цилиндра с площадью основы *S*=    ', S ,' радиусом *R* =    ', R   , 'и высотой *H*=', H ,'равен: <br \/>');
document.writeln('V = ' , S * H , '<br \/>');
document.writeln('------------------- <br \/>');
document.writeln('end. <br \/>');
document.writeln(' <br \/>************** <br \/>');
document.writeln('Обьем цилиндра с площадью основы *S*', S ,' радиусом *R* ', R, 'и высотой *H* ',  H ,      ' равен: <br \/>');
document.writeln('V = ' , res , '<br \/>');
document.writeln('------------------- <br \/>');
document.writeln('end. <br \/>');