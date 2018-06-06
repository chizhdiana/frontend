
var factorial = 1;
var sum=1;

do {
    var a = +prompt('input a');
    var b = +prompt('inpun b');
    
 flag = isNaN(a) && isNaN(b);
  if (flag) {
       alert('invalid , try again!');
        }
     } while(flag);


if (a<b){
    for(j=1, i=a;i<=b;i++, j++)
    { 
        factorial*=i;
        sum+=factorial;
       // h += h;
       
        console.log('h:',j ,'number',  i);

    }
    
   console.log('Factorial sum ,' , sum);
    
}else{
    alert('a should be < b');
    //a = +prompt('input a');
   // b = +prompt('inpun b');

}
