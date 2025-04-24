export const buildproductDetailView = (product) => {
    const date = new Date(product.updatedAt)
    let productView = `
        <p>${product.user.name} - ${date.toLocaleString()}</p>
        <p><img src="${product.image}" alt="${product.name}" width="200"/></p>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price} €</p>
        <p><em>${product.type}</em></p>
        `;
    return productView
}

export const buildRemoveproductButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = 'Delete';

    return removeButton;
}