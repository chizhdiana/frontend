var num = +prompt('number');
var str = String(num);
var max=0;

for (i=0;i<=str.length; i++){
   // console.log(i);
   
    if(i>max){
      
        max=i;

    }
   

}
console.log('MaxNumber'+ max);