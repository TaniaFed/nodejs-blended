import { createFakeProduct } from "../utils/createFakeProducts.js";
import { readProducts } from "../utils/readProducts.js";
import { writeProducts } from "../utils/writeProducts.js";

const generateProducts = async (number) => {
    try {
        const existingProducts = await readProducts();

        const newProducts = Array.from({ length: number }, () => createFakeProduct());

        const updatedProducts = [...existingProducts, ...newProducts];

        await writeProducts(updatedProducts);
        console.log(`✅ Added ${number} products. Total: ${updatedProducts.length}`);
    } catch (error) {
        console.error('Error...', error);
    }
};

generateProducts(7);

