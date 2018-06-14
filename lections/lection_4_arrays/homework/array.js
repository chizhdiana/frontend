var A = [];
var B =[];
A.length =10;
var n =20;
var m = 200;


// Tast 1

// fill B using A

for(i=0;i< A.length; i++){
    A[i]= Math.floor(Math.random()*(m - n)) + n;

    }
    console.log('A',A);
  
 for(j=0; j< A.length; j++){
     //B = [];
    if(A[j]% 2 !=0){
       
        res = A[j];
        
        B.push(res);
       // console.log(B)
    
     } 

 }

console.log('B', B);


//find max, min


var max = A[0];
for(i= 0; i<A.length; i++){
 
if(A[i]>max){
    max = A[i];
   //
    A[i]=max;   

}
}
console.log('Max', max);


var min = A[0];
for(i= 0; i<A.length; i++){
    
if(A[i]<min){
    min = A[i];
    

}
}
console.log('Min',min);




// Task 2
//Beetwen_min_max
for(i>min; i<max; i++){

    B.push(i)
    

}
console.log(B);



// Task 3

// change max and min

var b_min = B[0];
var b_max = B[0];
var nMin =0;
var nMax =0;

for(i=0; i<B.length; i++){
    if(B[i]>max){
        max = B[i];
        nMax =i;
        console.log('nMax', nMax);


    }
    if(B[i]<min){
        min = B[i];
        nMin =i;
        console.log('nMin', nMin);

    }



}
var tmp = B[nMax];
B[nMax] = B[nMin];
B[nMin] = tmp;

console.log('tmp', tmp);



// Task 4
// revers A

for(i= A.length-1 ; i>0; i--){
    console.log('Reversed A', A[i]);
}











