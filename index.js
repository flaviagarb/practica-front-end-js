import { loaderController } from './loader/loaderController.js';
import { showProductsController } from './show-products/showProductsController.js'
import { notificationsController } from './notifications/notificationsController.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".products-container");

    const loader = document.querySelector(".loader")

    const notifications = document.querySelector(".notifications")

    const { show, hide } = loaderController(loader)
    container.addEventListener('loader-products-started', () => {
        show()
    })
    container.addEventListener('loader-products-finished', () => {
        hide()
    })
    container.addEventListener("load-products-error", (event) => {
        const errorMessage = event.detail;
        showNotification(errorMessage)
    })
    showProductsController(container)
})