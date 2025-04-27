import { loaderController } from './loader/loaderController.js';
import { productDetailController } from "./product-detail/productDetailController.js";


document.addEventListener("DOMContentLoaded", () => {

    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");

    const loader = document.querySelector(".loader");
    const { show, hide } = loaderController(loader);

    if (productId) {
        const productContainer = document.querySelector(".product-container")
        productDetailController(productContainer, productId, show, hide)
    } else {
        window.location = '/'
    }
})