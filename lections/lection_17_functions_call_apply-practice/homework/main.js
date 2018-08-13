

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(obj , key){
    arr = [];
    for(key in obj){
        arr.push(key.value);
    
    }
    return arr;

}
var res = pluck.call(characters , 'name')
console.log(res);