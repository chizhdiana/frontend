arr =[];
arr.lenght = 10;
m=200;
n= 20;
for(i=0; i<arr.lenght; i++){
    arr[i] = Math.floor(Math.random()*(m-n)+n);

}
console.log('arr', arr)

for(i=0; i< arr.lenght; i+=2){
   
 
    temp =  arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
} 
console.log('arr', arr)