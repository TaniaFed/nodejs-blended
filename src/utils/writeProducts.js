import { PATH_DB } from '../constants/products.js';
import * as fs from 'node:fs/promises';

export const writeProducts = async (updatedProducts) => {
    const data = JSON.stringify(updatedProducts, undefined, 2);

    try {
        await fs.writeFile(PATH_DB, data, 'utf-8');
    } catch (err) {
        console.error('Error...', err);
    }
};
