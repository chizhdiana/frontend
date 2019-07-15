var arr = [1, 2, 3, 4];


function fmap(dof, list) {

    return function () {
        var res
       list.forEach(function(el, pos, arr){
           arr[pos]= dof(el)
         res = arr[pos]


        })
        return res
    }
}

function f(x) {

    return x + x;

}
var result = fmap(f, arr);

console.log(result());
console.log(result());
console.log(result());
console.log(result());






