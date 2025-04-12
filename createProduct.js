import { createProductController } from "./create-product/createProductController.js";
import { notificationsController } from './notifications/notificationsController.js';
import { loaderController } from './loader/loaderController.js';

document.addEventListener("DOMContentLoaded", () => {

    const token = localStorage.getItem('token');
    if (!token) {
        window.location = '/login.html';
        return;
    }

    const loader = document.querySelector(".loader");
    const notifications = document.querySelector(".notifications");
    const form = document.querySelector("form");

    const { show, hide } = loaderController(loader);
    const { showNotification } = notificationsController(notifications);

    try {
        createProductController(form, show, hide, showNotification);
    } catch (error) {
        console.error(error);
    }

});