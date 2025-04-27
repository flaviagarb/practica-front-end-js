import { productDetailModel, getLoggedInUserInfo, removeproduct } from "./productDetailModel.js";
import { buildproductDetailView, buildRemoveproductButton } from "./productDetailView.js";
import { notificationsController } from '../notifications/notificationsController.js';

export const productDetailController = async (productContainer, productId, show, hide, showNotification) => {

    const showRemoveproductButton = async (productId) => {
        const removeButton = buildRemoveproductButton()
        const buttonContainer = productContainer.querySelector("#delete-button-container");

        if (buttonContainer) {
            buttonContainer.appendChild(removeButton)
        }

        removeButton.addEventListener("click", async () => {
            if (confirm("¿Are you sure you want to delete the product?")) {
                try {
                    await removeproduct(productId)
                    const event = new CustomEvent("product-deleted-ok", {
                        detail: {
                            message: 'You have successfully deleted the product!',
                            type: 'success'
                        }
                    });
                    productContainer.dispatchEvent(event)
                    setTimeout(() => {
                        window.location = '/index.html'
                    }, 3000);
                } catch (error) {
                    const event = new CustomEvent("product-deleted-error", {
                        detail: error
                    });
                    productContainer.dispatchEvent(event)
                }
            }
        })
    }

    try {
        show();

        const productDetail = await productDetailModel(productId);
        productContainer.innerHTML = buildproductDetailView(productDetail);

        const user = await getLoggedInUserInfo();
        if (user.id === productDetail.userId) {
            await showRemoveproductButton(productId);
        }
    } catch (error) {
        showNotification(error.message)
        setTimeout(() => {
            window.location = '/';
        }, 3000);

    } finally {
        hide();
    }
}
