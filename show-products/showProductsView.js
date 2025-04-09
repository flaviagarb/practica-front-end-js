// funciones para crear el html 
export const buildProducts = (product) => {
    let productView = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} €</strong></p>
      <p><em>${product.type}</em></p>
    `
    return productView
}

// funcion para pintar no hay productos
export const buildNoProductsAdvice = () => {
    return '<h3> Lo siento, no hay productos disponibles! </h3>'
}