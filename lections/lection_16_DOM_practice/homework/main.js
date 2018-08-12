window.onload = function () {
    var h = 40;
    var step = 40;
    var position;

    list = [{
        title: 'Копировать',
        action: 'copy'
    },
    {
        title: 'Выход',
        action: 'exit'
    },
    {
        title: 'jump',
        action: 'jump'
    },
    {
        title: 'changecolor',
        action: ' changecolor'
    }
    ];

    list.actions = {
        copy: copyAction,
        exit: exitAction,
        cut: cutAction,
        jump: jumpaction,
        remove: removeaction,
        changecolor: ChangeColor,
    }

    function createMenu(target, list) {
        if (!target || !list) {
            return;
        }

        menu = document.querySelector('.menu.pattern').cloneNode();
        menu.classList.remove('pattern');

        for (i = 0; i < list.length; i++) {
            item = document.querySelector('.menu__item.pattern').cloneNode(true);
            item.classList.remove('pattern');

            item.querySelector('.menu__title').innerHTML = list[i].title;

            if (list[i].action == 'copy' || list[i].action == 'exit') {
                item.addEventListener('click', list.actions[list[i].action]);

            } else if (list[i].action == 'jump') {
                item.addEventListener('keydown', list.actions[list[i].action]);
                item.addEventListener('keyup', list.actions[list[i].action]);
            }
            else if (list[i].action == 'changecolor') {
                item.addEventListener('style', list.actions[list[i].action]);
            }

            menu.appendChild(item);

        }

        target.appendChild(menu);
        return menu;
    }


    function showMenu(target) {
        target.classList.add('show');
    }

    function hideMenu(target) {
        target.classList.remove('show');
    }

    function onConText(event) {
        event.preventDefault();
        menu.style.left = event.offsetX + "px";
        menu.style.top = event.offsetY + "px";
        showMenu(menu);

        position = event.offsetY + "px";
    }

    function onClick(event) {
        hideMenu(menu);
        document.addEventListener('contextmenu', onConText);

    }

    function keydown(event) {
        if (event.keyCode == 0 || event.keyCode == 32) {
            menu.style.top = menu.getBoundingClientRect().top - h + 'px';

        }
    }

    function keyup(event) {

        if (event.keyCode == 0 || event.keyCode == 32) {
            menu.style.top = position;

        } else if (event.keyCode == 17) {
            menu.style.height = menu.style.height - 40 + 'px';
            menu.style.width = menu.style.width + 15 + 'px';

        }

        else if (event.keyCode == 37) { //left
            menu.style.left = menu.getBoundingClientRect().left - step + 'px';

        }
        else if (event.keyCode == 38) {// top
            menu.style.top = menu.getBoundingClientRect().top - step + 'px';
            if (window.pageYOffset > menu.style.top) {
                menu.classList.add('fixed');

            } else {
                menu.classList.remove('fixed');
            }

        }
        else if (event.keyCode == 39) {// right
            menu.style.left = menu.getBoundingClientRect().right + step + 'px';
            if (window.pageXOffset > menu.style.top) {
                menu.classList.add('fixed');

            } else {
                menu.classList.remove('fixed');
            }

            2
        }
        else if (event.keyCode == 40) {// bottom
            menu.style.top = menu.getBoundingClientRect().bottom + step + 'px';



        }

    }

    function style(event) {

        if (menu.style.backgroundColor != 'white') {
            menu.style.backgroundColor = 'white';
        } else {
            menu.style.backgroundColor = 'red';

        }
    }



    var menu = createMenu(this.document.body, list);
    document.addEventListener('contextmenu', onConText);
    document.addEventListener('click', onClick);
    this.document.addEventListener('keydown', keydown);
    this.document.addEventListener('click', style);
    document.addEventListener('keyup', keyup);


    function copyAction() {
        console.log('copy');

    }

    function exitAction() {
        console.log('exit');

    }

    function cutAction() {
        console.log('cut');

    }

    function jumpaction() {
        console.log('jump');
        
        keydown;
        keyup;




    }


    function removeaction() {

    }

    function ChangeColor() {
        style
    }




}