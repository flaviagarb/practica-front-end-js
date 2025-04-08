function drawProducts() {
    const products = [{
        name: 'PS5',
        description: 'text',
        price: 0,
        purchase: false
    },
    {
        name: 'PS5',
        description: 'text',
        price: 0,
        purchase: false
    },
    {
        name: 'PS5',
        description: 'text',
        price: 0,
        purchase: false
    },
    {
        name: 'PS5',
        description: 'text',
        price: 0,
        purchase: false
    }];
    const container = document.querySelector(".products-container")
    products.forEach(product => {
        const productHTML = document.createElement('div');
        productHTML.innerHTML = `
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.purchase}</p>
            `
        container.appendChild(productHTML)
    })
}