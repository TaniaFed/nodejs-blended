import { readProducts } from "../utils/readProducts.js";

export const getUniqueCategories = async () => {
    try {
        const products = await readProducts();
        
        
    } catch (error) {
        console.error('Error...', error);
        throw error;
    }
};

