import { createProduct } from "./createProductModel.js";

export const createProductController = (form) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productElement = form.querySelector('#product');
        const product = productElement.value;

        try {
            await createProduct(product)
            setTimeout(() => {
                window.location = '/';
            }, 2000)
        } catch (error) {
            alert(error.message)
        }
    })
}