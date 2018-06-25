
    //level 2

   // Организовать циклический ввод с клавиатуры 
  // элементов, которые будут добавляться
  // к существующему массиву A = [1,2,3] в конец. 
  //  Предусмотреть символ прекращения ввода «&»
  //  4 пункт, в начало
var arr = [1,2,3];



do{
   var  i = prompt();
     console.log(i);
   
    if(i =='&' ){
        console.log('i', i);
        break;
    }else{
        arr.push(i);

    }

}while(i);
    
   

console.log('arr', arr);

do{
   var i = prompt();
    console.log(i);
  
   if(i =='&' ){
       console.log('i', i);
       break;
   }else{
       arr.unshift(i);

   }

}while(i);
   
  

console.log('arr', arr);