// Transform the data for the navbar 
export const transformTypesDataForNavbar = (data) => {
    return data.reduce((acc, item) => {
        // Check if a `type` already exists in the result array
        let existingType = acc.find((entry) => entry.type === item.fields.Type[0]);

        if (!existingType) {
            // If the type does not exist, create a new entry
            existingType = {
                type: item.fields.Type[0],
                category: [],
            };
            acc.push(existingType);
        }

        // Check if the category already exists in the type's category array
        let existingCategory = existingType.category.find(
            (cat) => cat.category === item.fields.Category[0]
        );

        if (!existingCategory) {
            // If the category does not exist, create a new category entry
            existingCategory = {
                category: item.fields.Category[0],
                subcategories: [],
            };
            existingType.category.push(existingCategory);
        }

        // Add the subcategory to the existing category if it's not already added
        if (
            item.fields.SubCategory &&
            !existingCategory.subcategories.includes(item.fields.SubCategory)
        ) {
            existingCategory.subcategories.push(item.fields.SubCategory);
        }

        return acc;
    }, []);
};

//Process only fashion data for nav
export const processFashionCategory = (data) => {
    // Find the object with type "Fashion"
    const fashionObject = data.find((item) => item.type === "Fashion");

    // Return the category array if it exists
    return fashionObject ? fashionObject.category : [];
};

//Process only accessories data for nav
export const processAccessoriesCategory = (data) => {
    // Find the object with type "Fashion"
    const fashionObject = data.find((item) => item.type === "Accessories");

    // Return the category array if it exists
    return fashionObject ? fashionObject.category : [];
};