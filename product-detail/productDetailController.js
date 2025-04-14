import { productDetailModel, getLoggedInUserInfo, removeproduct } from "./productDetailModel.js"
import { buildproductDetailView, buildRemoveproductButton } from "./productDetailView.js"

export const productDetailController = async (productContainer, productId) => {

    const showRemoveproductButton = (productId) => {
        const removeButton = buildRemoveproductButton()
        productContainer.appendChild(removeButton)

        removeButton.addEventListener("click", () => {
            if (confirm("¿Are you sure you want to delete the product?")) {
                removeproduct(productId)
            }
        })
    }

    try {
        const productDetail = await productDetailModel(productId)
        productContainer.innerHTML = buildproductDetailView(productDetail)

        const user = await getLoggedInUserInfo();
        if (user.id === productDetail.userId) {
            showRemoveproductButton(productId)
        }
    } catch (error) {
        alert(error.message)
    }
}
