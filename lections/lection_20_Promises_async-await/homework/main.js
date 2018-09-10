


function doAjax(method, url){
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function() {
            if(xhr.readyState != 4) {
                return;
            }

            var resp = JSON.parse(xhr.responseText);

            if (xhr.status != 200) {
                
                reject(xhr.statusText);
            }

            // if(!resp.x) reject();

            resolve(resp);
        }

        xhr.send();
    });
}

var listPomise = [doAjax('GET', '/data.json'), doAjax('GET', '/data2.json')];


Promise.all(listPomise)
.then(function(values){
   // console.log(values);
    var res =[]
    for(i in values){
        res= JSON.stringify( values[i].concat(values[i]))
    }
   
    console.log('res'+ res)
    return res;
    
})
.catch(function(err){
    console.log(err);
});
//-------------------------


function runAfter(){
    var fun =[];
    for( i =0 ; i <arguments.length; i++){
        for(j=0; j< arguments[i].length; j++){
          
            fun.push( arguments[i][j]) 
         }   
        }
         
         return function(values){
             for(var j= 0; j<fun.length;j++){
                values.forEach(element => {
                   fun[j](element)
                    
                });

             }
         
         
        

     
}
   
}
        

function doIt(values){
    console.log('doIt',values);
    return this.values;

}
function doIt1(values){
    console.log('doIt1',values);
    return this.values+1;

}
function doIt2(values){
    console.log('doIt2',values);
    return this.values+2;

}

function gPr(callback){
    

    return new Promise(function(resolve, reject){
        callback(resolve, reject);
         
    })
}
function setTimer(resolve, reject){
    setTimeout(function(){
       
        var local = Math.floor(Math.random()*100) + 1
        if (local <= 100) {
            console.log('local', local)
            resolve(local);
         }

        reject(local);

    }, 500);
}
var listgPR = [gPr(setTimer),gPr(setTimer), gPr(setTimer), gPr(setTimer)]

Promise.all(listgPR)
.then(runAfter([doIt, doIt1, doIt2]));

