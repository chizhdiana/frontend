var a = +prompt('input a');
var b = +prompt('inpun b');
var h= 1;
var factorial = 1;
var sum=1;


if (a<b){
    for(i=a;i<=b;i++)
    { 
        factorial*=i;
        sum+=factorial;
        h += h;
       
        console.log('h:',h ,'number',  i);

    }
    
   console.log('Factorial sum ,' , sum);
    
}else{alert('a should be < b');
}
