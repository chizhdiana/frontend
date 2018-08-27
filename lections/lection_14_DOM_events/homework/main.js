window.onload = function () {
  var range = document.querySelector('.range');
  var number = document.querySelector('.number');
  var outer = document.querySelector('.outer');
  var inner = document.querySelector('.inner');
  var commision;

  var range_value, number_value;



  function onchange(event) {

    range_value = Number(this.value);
    console.log('range',range_value);

    number.value = range_value;  //присвоить значения для намбер инпута

    outer.style.height = range_value + 'px';  //высота зеленого дива == рандж
    console.log('green_div', outer.style.height);

    if (range_value < 20) {
      commision = 2;


    } else if (range_value > 20 && range_value < 50) {
      commision = 4;
    } else if (range_value > 50 && range_value < 75) {
      commision = 6;

    }
    else if (range_value > 75 && range_value < 100) {
      commision = 8;

    }

    inner.style.height = range_value + commision + 'px';// присвоить значение для красного блока
    console.log('commission', commision);
    console.log('red_div', inner.style.height  );

  
  }







  function oninput(event) {
    var target = event.target;
    number_value = Number(target.value);

    range.value = number_value;


  }


  range.addEventListener('change', onchange);
  number.addEventListener('input', oninput);







}


