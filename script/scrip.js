document.addEventListener('DOMContentLoaded', () => {
    // Cart storage
    const cart = [];

    // Update cart display
    function updateCart() {
        const cartContainer = document.querySelector('#offcanvasCart .offcanvas-body');
        cartContainer.innerHTML = '';

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="text-center">
                    <i class="bi bi-cart3 fs-1"></i>
                    <p class="mt-3">Your shopping cart is currently empty!</p>
                    <button class="btn btn-primary">Continue shopping</button>
                </div>
            `;
            return;
        }

        cart.forEach(item => {
            cartContainer.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span>${item.name} - ${item.price}</span>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
            `;
        });
    }

    // Function to add item to cart
    function addToCart(id, name, price) {
        cart.push({ id, name, price });
        updateCart();
    }

    // Add event listeners to all unique Add to cart buttons in the carousel
    document.querySelectorAll('#productCarousel .carousel-item button[id^="add-to-cart-"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.id.split('-').pop();
            const carouselItem = event.target.closest('.carousel-item');
            const name = carouselItem.querySelector('p').textContent;
            const price = carouselItem.querySelector('h3').textContent;

            addToCart(id, name, price);
            console.log(`Added ${name} to cart`);
        });
    });

    // Add event listeners to all unique Add to cart buttons in the grid section
    document.querySelectorAll('.row .col-md-3 button[id^="add-to-cart-"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.id.split('-').pop();
            const gridItem = event.target.closest('.col-md-3');
            const name = gridItem.querySelector('p').textContent;
            const price = gridItem.querySelector('h5').textContent.split(" ")[0]; // Takes price without discount if any

            addToCart(id, name, price);
            console.log(`Added ${name} to cart`);
        });
    });

    // Remove from cart 
    window.removeFromCart = function(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index > -1) {
            cart.splice(index, 1);
            updateCart();
        }
    };
});
