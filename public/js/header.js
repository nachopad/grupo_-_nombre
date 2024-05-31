document.addEventListener('DOMContentLoaded', (event) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartLength = cart ? cart.products.length : 0;
    document.querySelector('.shopping-mount-pc').textContent = cartLength;
});