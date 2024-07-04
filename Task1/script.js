document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('decrease-quantity').addEventListener('click', () => {
        const quantityInput = document.getElementById('quantity');
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    document.getElementById('increase-quantity').addEventListener('click', () => {
        const quantityInput = document.getElementById('quantity');
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });

    document.getElementById('add-to-cart').addEventListener('click', () => {
        alert('Item added to cart');
    });
});
