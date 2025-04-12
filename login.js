import { loginController } from "./login/loginController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const loader = document.querySelector(".loader");
    const notifications = document.querySelector(".notifications");

    const { show, hide } = loaderController(loader);
    const { showNotification } = notificationsController(notifications);

    loginController(form, show, hide, showNotification)
})