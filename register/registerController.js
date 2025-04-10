import { createUser } from "./registerModel.js";

export const registerController = (form) => {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailElement = form.querySelector('#email');
        const email = emailElement.value;

        const passwordElement = form.querySelector('#password');
        const password = passwordElement.value;

        const passwordConfirmElement = form.querySelector('#password-confirm');
        const passwordConfirm = passwordConfirmElement.value;

        const errors = [];

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!emailRegExp.test(email)) {
            errors.push('El formato del email es incorrecto')
        }


        if (password !== passwordConfirm) {
            errors.push('Las contraseñas no son iguales')
        }

        if (errors.length === 0) {
            handleCreateUser(name, email, password, form)
        } else {
            errors.forEach(error => {
                const event = new CustomEvent("register-error", {
                    detail: error
                });
                form.dispatchEvent(event)
            })
        }
    })
}

const handleCreateUser = async (name, email, password, form) => {
    try {
        await createUser(name, email, password);
        const event = new CustomEvent("register-ok", {
            detail: {
                message: 'Te has registrado correctamente',
                type: 'success'
            }
        });
        form.dispatchEvent(event)
        setTimeout(() => {
            window.location = '/'
        }, 5000);
    } catch (error) {
        const event = new CustomEvent("register-error", {
            detail: error
        });
        form.dispatchEvent(event)
    }
}