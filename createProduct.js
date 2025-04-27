import { createProductController } from "./create-product/createProductController.js";
import { notificationsController } from './notifications/notificationsController.js';
import { loaderController } from './loader/loaderController.js';
import { sessionController } from './session/sessionController.js';

document.addEventListener("DOMContentLoaded", () => {

    const token = localStorage.getItem('token');
    if (!token) {
        window.location = '/login.html';
        return;
    }

    const loader = document.querySelector(".loader");
    const form = document.querySelector("form");
    const session = document.querySelector(".session");
    const notifications = document.querySelector(".notifications");

    const { show, hide } = loaderController(loader);
    const { showNotification } = notificationsController(notifications);

    try {
        createProductController(form, show, hide, showNotification);
        sessionController(session);
    } catch (error) {
        console.error(error);
    }

});