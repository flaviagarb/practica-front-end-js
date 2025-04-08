export async function showProductsController() {
    const container = document.querySelector(".products-container")
    try {
        const products = await getProducts();
        if (products.length > 0) {
            drawProducts(products, container)
        } else {
            container.innerHTML = buildNoProductsAdvice()
        }
    } catch (error) {
        alert(error.message)
    }
}