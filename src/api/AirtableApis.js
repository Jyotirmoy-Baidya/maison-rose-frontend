// fetch Whats new 
import axios from 'axios';
const API_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}`;

const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    },
};

export const fetchRecords = async (tableName) => {
    try {
        const response = await axios.get(`${API_URL}/${tableName}`, config);
        return response.data.records;
    } catch (error) {
        console.error("Error fetching records: ", error);
        throw error;
    }
};


//Fetch by Type
export const fetchFilteredProductsOnType = async (typeValue) => {
    try {
        const filterFormula = `type="${typeValue}"`; // Airtable formula for filtering

        const response = await axios.get(
            `${API_URL}/Products?filterByFormula=${encodeURIComponent(filterFormula)}`,
            config
        );

        return response.data.records; // Return the filtered products
    } catch (error) {
        console.error("Error fetching filtered products:", error);
        throw error;
    }
};

//Fetch By Subcategory
export const fetchFilteredProductsOnCategory = async (typeValue) => {
    try {
        const filterFormula = `SEARCH("${typeValue}", {Category})`;

        const response = await axios.get(
            `${API_URL}/Products?filterByFormula=${encodeURIComponent(filterFormula)}`,
            config
        );

        return response.data.records; // Return the filtered products
    } catch (error) {
        console.error("Error fetching filtered products:", error);
        throw error;
    }
};

