import { registerController } from "./register/registerController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { loaderController } from './loader/loaderController.js';

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");
    const notifications = document.querySelector("#notifications");
    const loader = document.querySelector(".loader");

    const { showNotification } = notificationsController(notifications)
    const { show, hide } = loaderController(loader);

    registerForm.addEventListener("register-error", (event) => {
        const message = event.detail;
        showNotification(message)
    })
    registerForm.addEventListener("register-ok", (event) => {
        const message = event.detail.message;
        const type = event.detail.type;
        showNotification(message, type)
    })

    registerController(registerForm, show, hide)
})