// fetch Whats new 
import axios from 'axios';
import { transformTypesDataForNavbar } from '../utils/TransformData';
const API_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}`;

const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    },
};

export const fetchWhatsNewRecords = async (tableName) => {
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
        const filterFormula = `SEARCH("${typeValue}", {Type})`; // Airtable formula for filtering
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

//Fetch By Subcategory
export const fetchFilteredProductsOnSubCategory = async (typeValue) => {
    try {
        const filterFormula = `SEARCH("${typeValue}", {SubCategory})`;
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


//Search 
export const fetchFilteredProductsOnSearch = async (typeValue) => {
    console.log(typeValue);
    try {
        // Create the formula to search across multiple fields
        const filterFormula = `
                OR(
                    SEARCH(LOWER("${typeValue}"), LOWER({Tags})),
                    SEARCH(LOWER("${typeValue}"), LOWER({SubCategory})),
                    SEARCH(LOWER("${typeValue}"), LOWER({Type})),
                    SEARCH(LOWER("${typeValue}"), LOWER({Category})),
                    SEARCH(LOWER("${typeValue}"), LOWER({WhatsNewTagline})),
                    SEARCH(LOWER("${typeValue}"), LOWER({Color}))
                )
        `;

        // Make the API call with the encoded formula
        const response = await axios.get(
            `${API_URL}/Products?filterByFormula=${encodeURIComponent(filterFormula)}`,
            config
        );
        console.log(response.data.records)

        return response.data.records; // Return the filtered products
    } catch (error) {
        console.error("Error fetching filtered products:", error);
        throw error;
    }
};





// Fetch the navbar categories (category table)
export const fetchCategoriesAndAccessories = async () => {
    try {
        const response = await axios.get(`${API_URL}/${import.meta.env.VITE_AIRTABLE_TYPES_TABLE}`, config);
        const transformed = transformTypesDataForNavbar(response.data.records);
        console.log(transformed);
        return transformed;

    } catch (error) {
        console.error("Error fetching records: ", error);
        throw error;
    }
};
