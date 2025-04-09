// funciones para crear el html 
export const buildProducts = (product) => {
    let productView = `
            <p>${product.image}</p>
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.type}</p>
            `
    return productView
}

// funcion para pintar no hay productos
export const buildNoProductsAdvice = () => {
    return '<h3> Lo siento, no hay productos disponibles! </h3>'
}