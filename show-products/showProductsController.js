// Usa modelo y usa vistas
import { getProducts } from "./showProductsModel.js";
import { buildNoProductsAdvice, buildProducts } from "./showProductsView.js"

export async function showProductsController(container) {

    try {
        const event = new CustomEvent("loader-products-started")
        container.dispatchEvent(event)
        const products = await getProducts();
        drawProducts(products, container)
    } catch (error) {
        const event = new CustomEvent("load-products-error", {
            detail: error.message
        })
        container.dispatchEvent(event)
    } finally {
        const event = new CustomEvent("loader-products-finished")
        container.dispatchEvent(event)
    }
}

function drawProducts(products, container) {
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = buildNoProductsAdvice()
    }

    products.forEach((product) => {

        const productHtml = document.createElement('div');
        productHtml.innerHTML = buildProducts(product)

        container.appendChild(productHtml)
    })
}