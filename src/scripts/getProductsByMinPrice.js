import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (minPrice) => {


    try {
        const products = await readProducts();

        const filteredProducts = products.filter(product => Number(product.price) >= minPrice);

        return filteredProducts;
    } catch (error) {
        console.error('Error...');
        throw error;
    }
};

const minPrice = 150; 
getProductsByMinPrice(minPrice).then(products => console.log("Filtered products:", products));