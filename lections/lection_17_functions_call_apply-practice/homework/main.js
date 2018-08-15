

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];


function pluck(obj, key){
    
    this.obj = obj;
    this.key = key;
   arr = [];
    for(i =0 ; i < this.obj.length; i++){
        debugger;
        for(this.j in this.obj[i]){
        
            if(this.j  == this.key){
               // console.log(  key);
               console.log( this.obj[i][j]);
               arr.push(this.obj[i][j]);

            }
          
           
        }    
       
    }
    return arr;

}
var res = pluck.call(characters , 'name')
console.log(res);;