import { REGEXP } from "../utils/constants.js";
import { loginUser } from "./loginModel.js";

export function loginController(loginForm, show, hide, showNotification) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userEmailElement = loginForm.querySelector("#mail");
        const passwordElement = loginForm.querySelector("#password");

        const userEmail = userEmailElement.value;
        const password = passwordElement.value;

        const emailRegExp = new RegExp(REGEXP.mail);
        if (!emailRegExp.test(userEmail)) {
            showNotification("Wrong Email!");
        } else {
            handleLoginUser(userEmail, password);
        }
    });

    async function handleLoginUser(userEmail, password) {
        try {
            show();
            const token = await loginUser(userEmail, password);
            localStorage.setItem("token", token)
            window.location = '/';
        } catch (error) {
            showNotification(error.message)
        } finally {
            hide();
        }
    }
}