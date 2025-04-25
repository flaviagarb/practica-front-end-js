export const buildproductDetailView = (product) => {
    const date = new Date(product.updatedAt)
    let productView = `
        <div class="card mx-auto my-4" style="width: 18rem;"> <!-- ✅ Card centrada y tamaño fijo -->
            <img src="${product.image}" class="card-img-top" alt="${product.name}" /> <!-- ✅ Imagen adaptada -->
            <div class="card-body text-center"> <!-- ✅ Cuerpo de la card centrado -->
                <h5 class="card-title">${product.name}</h5> <!-- ✅ Nombre como título -->
                <p class="card-text">${product.description}</p> <!-- ✅ Descripción -->
                <p class="card-text"><strong>${product.price} €</strong></p> <!-- ✅ Precio destacado -->
                <p class="card-text"><em>${product.type}</em></p> <!-- ✅ Tipo en cursiva -->
                <small class="text-muted">Posted by ${product.user.name} on ${date.toLocaleString()}</small> 
                <div id="delete-button-container" class="mt-3"></div>
            </div>
        </div>
    `;
    return productView
}

export const buildRemoveproductButton = () => {
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger", "mt-3");
    removeButton.textContent = 'Delete';

    return removeButton;
}