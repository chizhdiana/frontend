window.onload = function () {
  var block = document.querySelector('.block');

  var h = 40;
  var step = 40;
  var position;

 
  function onclick(event) {
    console.log('click',event.type, event);
    position = block.getBoundingClientRect();
    
  }

  function keydown(event) {
    const keyName = event.key;

    if (event.keyCode == 0 || event.keyCode == 32) {
      block.style.top = block.getBoundingClientRect().top - h + 'px';
      

    }
  }


  function keyup(event) {
    const keyName = event.key;

    if (event.keyCode == 0 || event.keyCode == 32) {
     
      block.style.top = position.top  ;
      block.style.left = position.left;
      block.style.right = position.right;
      block.style.bottom = position.bottom;

  
    } else if (event.keyCode == 17) {
      block.style.height = block.style.height  -40 + 'px';
      block.style.width = block.style.width + 15 + 'px';

    }

    else if (event.keyCode == 37) { //left
      console.log('keyup event\n\n' + 'key: ' + keyName);
      block.style.left = block.getBoundingClientRect().left - step + 'px';

    }
    else if (event.keyCode == 38) {// top
      block.style.top = block.getBoundingClientRect().top - step + 'px';
    }
    else if (event.keyCode == 39) {// right
      block.style.left = block.getBoundingClientRect().right +step + 'px';

2    } 
    else if (event.keyCode == 40) {// bottom
      block.style.top = block.getBoundingClientRect().bottom + step + 'px';


    }

  }





  block.addEventListener('click', onclick);
  document.addEventListener('keydown', keydown);
  document.addEventListener('keyup', keyup);






}


