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
    products.forEach(products => {
        const productHTML = document.createElement('div');
        productHTML.innerHTML = `
            <p>${products.name}</p>
            <p>${products.description}</p>
            <p>${products.price}</p>
            <p>${products.purchase}</p>
            `
        container.appendChild(productHTML)
    })
}