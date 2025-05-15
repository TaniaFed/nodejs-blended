import { readProducts } from "../utils/readProducts.js";

export const getTotalPrice = async () => {
    try {
        const products = await readProducts();

        const totalPrice = products.reduce((sum, product) => sum + parseFloat(product.price), 0);

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
        
        return totalPrice.toFixed(2);
    } catch (error) {
        console.error('Error...', error);
        throw (error);
    }
};

getTotalPrice();