window.onload = function () {

    var form = document.querySelector(".form");
    var name = document.querySelector(".name")
    name.addEventListener('change', onChange);
    var password = document.querySelector(".password");
    password.addEventListener("change", onChange);
    var submit = document.querySelector(".value")
    submit.addEventListener('click', sendRequest);
    var obj = {};// заполнить и отправить

    function onChange(event) {
        if (!nameValidate(name.value) || !passwordValidate(password.value)) {

            submit.setAttribute("disabled", true);
        }
        else {
            submit.removeAttribute("disabled");

        }

    }


    function sendRequest(event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();

        xhr.open("POST", form.action, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = function () {
            if (request.readyState != 4 || status != 200) {
                alert(xhr.status + ': ' + xhr.statusText)
                return
            }

            document.querySelector(".output").innerHTML = xhr.responseText;
        }
        json = JSON.stringify(obj);
        alert(json)
        xhr.send(json)


    }

    function nameValidate(str) {
        var res = str;
        if (res.split('').every(isNaN)) {
            obj["name"] = str;
            return true;

        } else {
            var message = document.createElement("div")
            message.className = "nameError"
            message.innerHTML = "Name should not contain digit"
            form.append(message);
            return false;
        }
    }

    function passwordValidate(str) {
        var res = str.split('')
        if (res.some(isNaN)) {
            var message = document.createElement("div")
            message.className = "passError"
            message.innerHTML = "Password should contain only digit"
            form.append(message);
            return false;
        } else {
            obj["password"] = str;
            return true;

        }

    }

}