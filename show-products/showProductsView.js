// funcion para crear el html 
export const buildProducts = (product) => {
  let productView = `

      <img src="${product.image}" class="card-img-top" style="object-fit: cover; height: 200px;" alt="${product.name}" />
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 class="card-title fw-bold">${product.name} – ${product.price} €</h5>
          <p class="card-text">${product.description}</p>
        </div>
        <span class="badge ${product.type === 'sell' ? 'bg-success' : 'bg-primary'} mt-2">
          ${product.type.toUpperCase()}
        </span>
    </div>
  `
  return productView;
}

// funcion para pintar no hay productos
export const buildNoProductsAdvice = () => {
  return '<h3> Sorry, there are no products available! </h3>'
}