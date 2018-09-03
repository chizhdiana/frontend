var user = {
    username: "Tom",
    age: 23
};
var json = JSON.stringify(user);
var request = new XMLHttpRequest();
request.open("POST", "http://localhost:8080/postdata.php");
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
            document.getElementById("output").innerHTML=request.responseText;
}
request.send(json);