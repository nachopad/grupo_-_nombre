window.addEventListener('load', function (e) {
    const form = document.querySelector('form');
    const buttonSize = document.querySelectorAll('#sizes-button');
    const labelsButtonColors = document.querySelectorAll('#container-colors');

    if(labelsButtonColors){
        labelsButtonColors.item(0).classList.add('selected-color')
    }
    labelsButtonColors.forEach(label => {
        label.children[0].addEventListener('click', function(e){
            labelsButtonColors.forEach(restartLabel => restartLabel.classList.remove('selected-color'));
            label.classList.add('selected-color');
        });
    })

    let otherCategory = false;
    if(buttonSize.length){
        buttonSize.forEach(button => {
            button.addEventListener('click', function (event) {
                buttonSize.forEach(restartButton => {
                    restartButton.classList.remove('selected');
                });
                button.classList.add('selected');
            });
        });
    }else{
        otherCategory = true;
    }

    const addToCartButton = document.getElementById('add-to-cart-button');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let sizeSelected = document.querySelector('.selected');
        let colorSelected = document.querySelector('.selected-color').children[0].getAttribute('color-name');
        if (sizeSelected) {
            addProduct(sizeSelected.textContent, colorSelected);
        }else{
            if(otherCategory){
                addProduct("", colorSelected);
            }else{
                showAlertMessage();
            }
        }

    })

    function addProduct(sizeSelected, colorSelected){
        let cart = {
            data: new Date(),
            products: []
        };
        let product = {
            id: addToCartButton.getAttribute('product-id'),
            size: sizeSelected,
            color: colorSelected, 
            quantity: 1,
            dateAdd : new Date()
        }
        console.log(product);
        cart.products.push(product);

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            let cartLocal = JSON.parse(localStorage.getItem('cart'));
            if(cartLocal.products.some(p => (p.id === product.id && p.size==product.size && p.color==product.color))){
                cartLocal.products.forEach(p =>{
                    if(p.id === product.id && p.size==product.size && p.color==product.color){
                        p.quantity++;
                    }
                })
            }else{
                cartLocal.products.push(product);
            }
            console.log(cartLocal);
            localStorage.setItem('cart', JSON.stringify(cartLocal));
        }
    }

    function showAlertMessage(){
        let buttonToAdd = document.querySelector('#add-to-cart-button');
        buttonToAdd.innerText = "SELECCIONÁ TU TALLA";

        setTimeout(() => {
            buttonToAdd.innerText = "AÑADIR AL CARRITO";
        }, 4000);
    }
})