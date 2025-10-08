function solveSolution() {
    const addButtons = Array.from(document.querySelectorAll('.add-product'));
    const checkoutButton = document.querySelector('.checkout');
    const textarea = document.querySelector('textarea');

    let totalPrice = 0;
    const products = new Set();

    for (const button of addButtons) {
        button.addEventListener('click', (e) => {
            const product = e.target.parentElement.parentElement;
            const productName = product.querySelector('.product-title').textContent;
            const productPrice = Number(product.querySelector('.product-line-price').textContent);

            totalPrice += productPrice;
            products.add(productName);

            textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    }

    checkoutButton.addEventListener('click', () => {
        textarea.value += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.\n`;
        for (const button of addButtons) {
            button.disabled = true;
        }
        checkoutButton.disabled = true;
    });
}

// This function is intended to be called on page load or when a specific event triggers it.
// Example: window.addEventListener('load', solveSolution);

