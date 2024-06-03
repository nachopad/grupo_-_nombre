window.addEventListener('load', async (e) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || {
        data: new Date(),
        products: []
    };
    const lista = document.querySelector('.product-list')
    if (cart.products.length==0) {
        showEmptyCart(lista);
    } else {
        let index = 0;
        cart.products.forEach(async (p) => {
            try {
                let response = await fetch(`http://localhost:3000/api/products/${p.id}`);
                let data = await response.json();
                showProducts(data.product, p.color, p.size, p.quantity, p.dateAdd, lista, index);
                index++;
            } catch (error) {
                console.log("Error: "+error);
            }
        })
    }

    function removeProduct(id){
        let cartLocal = JSON.parse(localStorage.getItem('cart'));
        cartLocal.products=cartLocal.products.filter(function(p){
            return p.dateAdd!=id;
        })
        saveLocalStorageCart(cartLocal);
    }
    function minusProduct(id){
        let cartLocal = JSON.parse(localStorage.getItem('cart'));
        let productToDelete = null;
        cartLocal.products.forEach((p) =>{
            if(p.dateAdd === id){
                if(p.quantity==1){
                    productToDelete = p;
                }else{
                    p.quantity--;
                }
            }
        })
        if(!productToDelete){
            saveLocalStorageCart(cartLocal);
            return;
        }
        removeProduct(productToDelete.dateAdd);
    }
    function plusProduct(id){
        let cartLocal = JSON.parse(localStorage.getItem('cart'));
        cartLocal.products.forEach(p =>{
            if(p.dateAdd === id){
                p.quantity++;
            }
        })
        saveLocalStorageCart(cartLocal);
    }

    function saveLocalStorageCart(cartLocal) {
        localStorage.setItem('cart', JSON.stringify(cartLocal));
        location.reload();
    }
    function showProducts(product, color, size, quantity, dateAdd, lista, index) {
        let article = document.createElement('article');
        article.classList.add("container-product", `${index}`);
        article.innerHTML = `<img src="/images/productDetail/${product.images[0].url_image}" alt="${product.title}">
        <div class="product-info">
            <h4 class="product-name">
                ${product.title}
                <div class="color-table">
                    Color: ${color}
                </div>
            </h4>
            <h4 class="talle"><span>Talle:</span> ${size}</h4>
            <h4 class="color">Color: ${color}</h4>
            <div class="content-price">
                
            </div>
            <div class="container-button-add-subtract">
            </div>
        </div>
        <div class="delete-icon">
        </div>`
        article = showPrice(product, article, quantity)
        let buttonTrash = document.createElement('button');
        buttonTrash.classList.add("trash");
        buttonTrash.innerHTML=`<i class="fa fa-trash"></i>`;
        buttonTrash.onclick = function(){
            removeProduct(dateAdd);
        };
        article.children[2].appendChild(buttonTrash);

        let buttonMinus = document.createElement('button');
        buttonMinus.classList.add("minus");
        buttonMinus.innerHTML = "-";
        buttonMinus.onclick = function(){
            minusProduct(dateAdd)
        };
        article.children[1].children[4].appendChild(buttonMinus);

        let pharaghap = document.createElement('p');
        pharaghap.innerHTML = `${quantity}`
        article.children[1].children[4].appendChild(pharaghap);

        let buttonPlus = document.createElement('button');
        buttonPlus.classList.add("plus");
        buttonPlus.innerHTML = "+";
        buttonPlus.onclick = function(){
            plusProduct(dateAdd)
        };
        article.children[1].children[4].appendChild(buttonPlus);

        lista.appendChild(article);
    }


    function showPrice(product, article, quantity) {
        let price = 0;
        if (product.discounts && product.discounts.percent > 0) {
            price = ((parseFloat(product.price) - (parseFloat(product.price) * (product.discounts.percent / 100))) * quantity).toFixed(2);
            article.getElementsByClassName('content-price').item(0).innerHTML += `
                <p class="price">$ ${parseFloat(product.price).toFixed(3)}</p>
                <p class="discount" style="color: red;">$ ${parseFloat(price).toFixed(3)}</p>`;
        } else {
            price = (parseFloat(product.price) * quantity).toFixed(2);
            article.getElementsByClassName('content-price').item(0).innerHTML += `
                <p>$ ${parseFloat(price).toFixed(3)}</p>`;
        }
        return article;
    }

    function showEmptyCart(lista) {
        let message = document.createElement('div');
        message.classList.add("empty-cart-container")
        message.innerHTML = `<p class="empty-cart-title">TU CARRITO ESTÁ VACÍO</p>
        <p class="empty-cart-description">No hay articulos en su carrito.</p>
        <p class="empty-cart-description">Haga&nbsp; <a href="/">click acá</a> &nbsp;para continuar comprando.</p>`
        lista.appendChild(message)
    };
})