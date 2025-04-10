// Usamos el modelo para obtener informacion del backend haciendo peticiones HTTP

export async function getProducts() {

    let products = [];
    try {
        const response = await fetch('http://localhost:8000/api/products')
        products = await response.json();

    } catch (error) {
        throw new Error("No ha sido posible obtener los productos.")
    }
    return products;

}