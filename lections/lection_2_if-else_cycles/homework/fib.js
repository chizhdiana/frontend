var n1 = 1;
var n2 = 1;
var fib;
var n = + prompt("intut n");
for (i=0; i<n; i++){
   fib = n1+n2;
    n1=n2;
    n2=fib;
    console.log(fib)

}
