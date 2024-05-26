window.addEventListener('load', async function (e) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {
        data: new Date(),
        products: []
    };
    
    if(!cart.products.length){
        location.href = "http://localhost:3000";
    }
    const form = document.querySelector('form');

    let total = 0;
    const subTotalHTML = document.querySelector('.subtotal');
    const totalHTML = document.querySelector('.show-total');
    cart.products.forEach(async (p) => {
        try {
            let response = await fetch(`http://localhost:3000/api/products/${p.id}`);
            let data = await response.json()
            total += await (singlePrice(data.product, p.quantity));
            subTotalHTML.innerHTML = `${total}`;
            totalHTML.innerHTML = `${total}`;
        } catch (error) {
            console.log("Error: " + error);
        }
    })
    const options = document.querySelector('#installement');
    
    options.addEventListener('change', function (e) {
        // Obtener la opción seleccionada
        const selectedOption = this.options[this.selectedIndex];
        // Obtener el número de cuotas
        const count = parseInt(selectedOption.getAttribute('count'));
        // Obtener el interés
        const interest = parseInt(selectedOption.getAttribute('interest'));
        if(interest){
            let total = parseFloat(subTotalHTML.textContent);
            total = ((total)+(total*(interest/100))).toFixed(2);
            totalHTML.innerHTML = `${total}`;
        }else{
            totalHTML.innerHTML = subTotalHTML.textContent;
        }
    });

    function singlePrice(product, quantity) {
        let price = 0;
        if (product.discounts) {
            price = (parseFloat(product.price) - (parseFloat(product.price) * (product.discounts.percent / 100))).toFixed(2);
        } else {
            price = parseFloat(product.price).toFixed(2);
        }
        return (price*quantity);
    }

    //Formulario
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');
        //Delete messages
        document.querySelectorAll('.alert-message').forEach(message => {
            message.remove();
        });

        inputs.forEach(input => {
            showMessage(input);
        })
        let errores = document.querySelectorAll('.alert-message');
        if(errores.length==1){
            await confirmOrder();
        }
    })

    function showMessage(input) {
        let message = document.createElement('p');
        message.classList.add("alert-message");
        message.style.color = "red";
        message.style.padding = "2px";
        message.style.width = "100%";

        switch (true) {
            case input.id == "postal-code" && input.value.length == 0:
                message.innerText = "* Debe ingresar un codigo postal"
                break;
            case (input.id == "sending-address" || input.id == "locality") && input.value.length == 0:
                message.innerText = "* Complete este campo para realizar la entrega"
                break;
            case input.value.length < 4:
                message.innerText = "* Debe ingresar un minimo de 4 caracteres"
                break;
        }
        if (message.textContent) {
            input.after(message);
        }
    }

    async function confirmOrder(){
        const postalCode = document.querySelector("#postal-code").value;
        const locality = document.querySelector("#locality").value;
        const sendingAddress = document.querySelector("#sending-address").value;
        let data= {
            installement:options[options.selectedIndex].value,
            total: document.querySelector('.show-total').textContent,
            shoppingCart: cart.products,
            postalCode,
            locality,
            sendingAddress
        }
        let response = await fetch("http://localhost:3000/cart/register-order", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let info = await response.json();
        localStorage.removeItem('cart');
        location.href = "http://localhost:3000";
    }
});