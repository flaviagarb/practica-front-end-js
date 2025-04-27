export const buildproductDetailView = (product) => {
    const date = new Date(product.updatedAt)
    if (product.image === "") {
        product.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtjqFKVwZWNCqI33H1OWcsUaZYww6FLLFAw&s"
    }

    let productView = `
        <div class="card mx-auto my-4" style="width: 18rem;"> 
            <img src="${product.image}" class="card-img-top" alt="${product.name}" /> 
            <div class="card-body text-center"> 
                <h5 class="card-title">${product.name}</h5> 
                <p class="card-text">${product.description}</p> 
                <p class="card-text"><strong>${product.price} €</strong></p> 
                <p class="card-text"><em>${product.type}</em></p> 
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