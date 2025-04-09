export function notificationsController(notifications) {
    const showNotification = (message) => {
        notifications.innerHTML = message
    }

    return {
        showNotification
    }
}