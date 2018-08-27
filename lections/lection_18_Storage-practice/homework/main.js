

window.onload = function () {
    displayCard();


    var items = this.document.querySelectorAll('.item');
    var buttons_add = this.document.querySelectorAll('.add_to_card');
    var button_remove_all = this.document.querySelector('.remove_all').addEventListener('click', RemoveAll)
    var button_remove = this.document.querySelectorAll('.remove')

    function RemoveAll(event) {
        return localStorage.clear();

    }


    function getCartItem() {
        return JSON.parse(localStorage.getItem('item_in_card'));
    }

    function setCartItem(item) {
        localStorage.setItem('item_in_card', JSON.stringify(item));

    }


    function displayCard() {
        var items = getCartItem();
        var card = document.createElement('UL');
        card.classList.add('.card');
        var li;
        for (var item in items) {
            li = document.createElement('li')
            li.innerHTML = items[item];
            card.appendChild(li);
        }
        document.body.appendChild(card)
    }

    function addToCard(event) {
        var card = getCartItem();
        if (!card) {
            card = {}
        }
        parent = this.parentNode; // родительский элемент кнопки Добавить 
        var item = this.getAttribute('data-id')
        var count = Number(parent.querySelector('.value').value)
        var title = parent.querySelector('.item_title').innerHTML;
        var price = parent.querySelector('.item_price').innerHTML;
        if (card.hasOwnProperty(item)) {
            card[item][2] += count;
            console.log(card)
        }
        else {
            card[item] = [title, price, Number(count)];
        }

        return setCartItem(card);


    }

    function remove(event) {
        parent = this.parentNode; // родительский элемент кнопки Добавить 
        var item = this.getAttribute('data-id');
        var card = getCartItem();
            if (card.hasOwnProperty(item)){
                console.log(card[item])
                delete card [item]
                console.log(card)

                localStorage.removeItem(item)
            }
            return setCartItem(card);
        
        
        
    }


    for (var i = 0; i < items.length; i++) {
        buttons_add[i].addEventListener('click', addToCard);

    }


    for (var i = 0; i < items.length; i++) {
        button_remove[i].addEventListener('click', remove);

    }

}
