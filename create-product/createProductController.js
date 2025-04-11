import { createProduct } from "./createProductModel.js";

export const createProductController = (form) => {
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
            await createProduct(productImage, productName, productDescription, productPrice, productType)
            setTimeout(() => {
                window.location = '/';
            }, 2000)
        } catch (error) {
            alert(error.message)
        }
    })
}