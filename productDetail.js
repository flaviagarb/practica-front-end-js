import { loaderController } from './loader/loaderController.js';
import { notificationsController } from './notifications/notificationsController.js';
import { productDetailController } from "./product-detail/productDetailController.js";


document.addEventListener("DOMContentLoaded", () => {

    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");

    const loader = document.querySelector(".loader");
    const { show, hide } = loaderController(loader);
    const notifications = document.querySelector("#notifications");
    const { showNotification } = notificationsController(notifications);

    if (productId) {
        const productContainer = document.querySelector(".product-container")

        productContainer.addEventListener("product-deleted-error", (event) => {
            const message = event.detail;
            showNotification(message)
        })

        productContainer.addEventListener("product-deleted-ok", (event) => {
            const message = event.detail.message;
            const type = event.detail.type;
            showNotification(message, type)
        })

        productDetailController(productContainer, productId, show, hide, showNotification)

    } else {
        showNotification("Error no product id")
        setTimeout(() => {
            window.location = '/index.html'
        }, 3000);
    }
})