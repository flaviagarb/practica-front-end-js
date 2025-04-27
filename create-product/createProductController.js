import { createProduct } from "./createProductModel.js";


export const createProductController = (form, show, hide, showNotification) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const productI = form.querySelector('#image');
        const productImage = productI.value;
        const productN = form.querySelector('#name');
        const productName = productN.value;
        const productD = form.querySelector('#description');
        const productDescription = productD.value;
        const productP = form.querySelector('#price');
        const productPrice = productP.value;
        const productT = form.querySelector('#type');
        const productType = productT.value;

        try {
            show();
            await createProduct(productImage, productName, productDescription, productPrice, productType)
            showNotification("Product created successfully", "success")
            setTimeout(() => {
                window.location = '/';
            }, 3000)
        } catch (error) {
            showNotification(error.message)
        } finally {
            hide();
        }
    })
}