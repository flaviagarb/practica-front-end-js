import { getProducts } from "./showProductsModel.js";
import { buildNoProductsAdvice, buildProducts } from "./showProductsView.js"

export async function showProductsController() {
    const container = document.querySelector(".products-container")
    const products = await getProducts();

    if (products.length > 0) {
        drawProducts(products, container)
    } else {
        container.innerHTML = buildNoProductsAdvice()
    }
}

function drawProducts(products, container) {
    container.innerHTML = '';

    products.forEach((product) => {

        const productHtml = document.createElement('div');
        productHtml.innerHTML = buildProducts(product)

        container.appendChild(productHtml)
    })
}