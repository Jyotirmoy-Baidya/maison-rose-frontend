// import express from 'express';
// import Airtable from 'airtable';
// import https from 'https';
// import dns from 'dns';

// const config = {
//     apiKey: 'pat2PGVXoCFuydAo9.a259b237eb4dbf6c91c421d22c337621599d7f230b7b6badf6643643f7f71f90',
//     baseId: 'appBPXT42IrFwRjTx',
//     tableName: 'Table1'
// };

// const router = express.Router();

// // Configure longer timeout and keep-alive
// const agent = new https.Agent({
//     keepAlive: true,
//     timeout: 60000,
//     lookup: (hostname, options, callback) => {
//         // Force IPv4
//         options.family = 4;
//         dns.lookup(hostname, options, callback);
//     }
// });

// const base = new Airtable({ 
//     apiKey: config.apiKey,
//     requestTimeout: 30000,
//     endpointUrl: 'https://api.airtable.com',
//     agent: agent
// }).base(config.baseId);

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const getCategoriesAndSubcategories = async (retries = 3) => {
//     for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//             console.log(`Attempt ${attempt} of ${retries}...`);
            
//             const allRecords = await base(config.tableName).select().all();
            
//             const categoryMap = new Map();

//             allRecords.forEach(record => {
//                 const fields = record.fields;
//                 const category = fields.Category;
//                 const subcategory = fields.SubCategory;

//                 if (category) {
//                     const categories = Array.isArray(category) ? category : [category];
                    
//                     categories.forEach(cat => {
//                         if (!categoryMap.has(cat)) {
//                             categoryMap.set(cat, new Set());
//                         }
                        
//                         if (subcategory) {
//                             const subcategories = Array.isArray(subcategory) ? subcategory : [subcategory];
//                             subcategories.forEach(sub => {
//                                 categoryMap.get(cat).add(sub);
//                             });
//                         }
//                     });
//                 }
//             });

//             const result = Array.from(categoryMap).map(([category, subcategories]) => ({
//                 category,
//                 subcategories: Array.from(subcategories)
//             }));

//             result.sort((a, b) => a.category.localeCompare(b.category));
//             result.forEach(item => {
//                 item.subcategories.sort();
//             });

//             return result;

//         } catch (error) {
//             console.error(`Error getting categories (attempt ${attempt}):`, error.message);
//             if (attempt === retries) {
//                 throw error;
//             }
//             await sleep(Math.pow(2, attempt) * 1000);
//         }
//     }
// };

// // API endpoint to get categories and subcategories
// router.get('/categories', async (req, res) => {
//     try {
//         const categories = await getCategoriesAndSubcategories();
//         res.json(categories);
//     } catch (error) {
//         console.error('Error in /categories endpoint:', error);
//         res.status(500).json({ 
//             error: 'Internal Server Error',
//             message: error.message 
//         });
//     }
// });

// export default router;
