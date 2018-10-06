


function doAjax(method, url) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
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
    .then(function (values) {
        // console.log(values);
        var res = []
        for (i in values) {
            res = JSON.stringify(values[i].concat(values[i]))
        }

        console.log('res' + res)
        return res;

    })
    .catch(function (err) {
        console.log(err);
    });
//-------------------------


function runAfter() {
    // console.log(arguments, arguments)

    var funk;
    for (i in arguments) {

        funk = arguments[i]
    }

    for (j = 0; j < funk.length; j++) {
        var f = funk[j]
    
        return function (values) {
           // var values = arguments
          //  return f(values)
        for (k = 0; k < values.length; k++) {
              
                var result = f(values[k])
                console.log('res',result)


            }
        }

    }

    }




function doIt(values) {
    console.log('doIt', values);

    this.values = values + 1;
    return this

}
function doIt1(values) {
    console.log('doIt1', values);
    this.values = values + 2;
    return this
}
function doIt2(values) {
    console.log('doIt2', values);
    this.values = values + 3;
    return this

}

function gPr(callback) {
    return new Promise(function (resolve, reject) {
        callback(resolve, reject);

    })
}
function setTimer(resolve, reject) {
    setTimeout(function () {

        var local = Math.floor(Math.random() * 100) + 1
        if (local <= 100) {
            console.log('local', local)
            resolve(local);
        }

        reject(local);

    }, 500);
}
var listgPR = [gPr(setTimer), gPr(setTimer), gPr(setTimer), gPr(setTimer)]

Promise.all(listgPR)
    .then(runAfter([doIt, doIt1, doIt2]));

