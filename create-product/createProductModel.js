export const createProduct = async (productImage, productName, productDescription, productPrice, productType) => {

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: JSON.stringify({
            image: productImage,
            name: productName,
            description: productDescription,
            price: productPrice,
            type: productType,
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error("Product could not be created")
    } else {
        alert("Product created successfully")
    }
}