window.onload = function () {

    var card = document.querySelector('.shopping-cart');
    var items = this.document.querySelectorAll('.item');
    var buttons_add  = this.document.querySelectorAll('.add_to_card');
    var button_remove_all = this.document.querySelector('.remove_all').addEventListener('click', RemoveAll)
    var button_remove = this.document.querySelectorAll('.remove')
    function getCartItem(){
        return JSON.parse(localStorage.getItem('item_in_card'));
    }
    
    function setCartItem(item){
        localStorage.setItem('item_in_card', JSON.stringify(item));
    
    }  
    function addToCard(){
        
        id = parentNode.getAttribute(da)
        
    }
    
    
    function showCard(target) {
        target.classList.add('show');
    }
    
    function hideCard(target) {
        target.classList.remove('show');
    }
    function RemoveAll(event){
        
      return  localStorage.clear();
        
    }

}