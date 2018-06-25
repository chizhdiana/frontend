//Test
//level 1




//Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’
arr = [1,2,3,4,5]
var res = arr.join(',')
console.log(res)

//Организовать вывод массива [6,7,2,3,5,7]
// в виде списка, при помощи тегов ul-li

var list = [6,7,2,3,5,7]
console.log("<ul>");
for(i = 0 ; i<list.length; i++){

    
    console.log("<li>" , list[i],"</li>");
}
console.log("<ul>");

///В массиве [5,6,43,3,436,7,87,76,45,3] 
//вырезать центральный элемент, если длина массива парная
// – вырезать два элемента, 
//которые можно считать центральными
var a = [10,7,43,3,436,99,87,76,45,3] ;
console.log(a);


    if(a.length %2 == 0){
        center = a.length/2-1; 
       // console.log('c1', a[center]);
        delete a[center];
        delete a[center+1];


    }else{
        center = a.length/2; 
        console.log('c2', a[center]);
        delete a[center];
    }


console.log(a);  


           
  
   
  
