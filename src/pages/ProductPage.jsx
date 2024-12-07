import React, { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import AnimatedDropdown from '../components/store/AnimatedDropdown';
import DesktopProductModal from '../components/store/DesktopProductModal';
import { ClimbingBoxLoader } from 'react-spinners';
import { override } from '../constants/basic';
import { fetchAllProducts, fetchFilteredProductsOnCategory, fetchFilteredProductsOnSearch, fetchFilteredProductsOnSubCategory, fetchFilteredProductsOnType, fetchFilteredProductsOnWhatsNew } from '../api/AirtableApis';
import ErrorComponent from '../components/basics/ErrorComponent';
import NoProductsFound from '../components/basics/NoProductsFound';
import SearchBar from '../components/store/SearchBar';

const ProductPage = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('default'); // Sorting options: 'default', 'asc', 'desc'
    const [selectedProduct, setSelectedProduct] = useState(null);


    const { type, cat, subcat, filterSearch, whatsnew } = useParams(); // Extract parameters

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);




    useEffect(() => {
        const getFilteredProducts = async () => {
            setLoading(true);
            try {
                // Determine API URL based on parameters
                if (cat && subcat) {
                    const filteredProducts = await fetchFilteredProductsOnSubCategory(subcat);
                    setProducts(filteredProducts);
                }
                else if (cat) {
                    const filteredProducts = await fetchFilteredProductsOnCategory(cat);
                    setProducts(filteredProducts);
                }
                else if (type) {
                    const filteredProducts = await fetchFilteredProductsOnType(type);
                    setProducts(filteredProducts);
                }
                else if (filterSearch) {
                    const filteredProducts = await fetchFilteredProductsOnSearch(filterSearch);
                    setProducts(filteredProducts);
                }
                else if (whatsnew) {
                    const filteredProducts = await fetchFilteredProductsOnWhatsNew(whatsnew);
                    setProducts(filteredProducts);
                }
                else {
                    const filteredProducts = await fetchAllProducts(filterSearch);
                    setProducts(filteredProducts);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getFilteredProducts();


    }, [type, cat, subcat, filterSearch, whatsnew]);

    // filter(product =>
    //     product.fields?.Name?.toLowerCase().includes(search.toLowerCase()) ||
    //     product.fields?.tags?.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    // )

    const filteredProducts = products?.sort((a, b) => {
        if (sort == 'Price: Low to High') return a.fields.Price - b.fields.Price;
        if (sort == 'Price: High to Low') return b.fields.Price - a.fields.Price;
        return 0; // Default order
    });

    const navigate = useNavigate();
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const [loading, setLoading] = useState(true);


    return (
        <div className="bg-primary-bg flex flex-col  min-h-screen p-3 xl:p-6">

            {
                loading ? <ClimbingBoxLoader
                    color={'#EFE7D2'}
                    loading={loading}
                    cssOverride={override}
                    size={'2vh'}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                    <>
                        {/* Search bar  */}
                        <SearchBar />
                        <div className="flex gap-2 justify-between items-center xl:mt-24 mb-3 mt-2">
                            <div className='text-primary-text text-3xl'><span className='text-xs xl:text-base'>Search results for : </span>{subcat || cat || type || whatsnew || filterSearch || ''}</div>
                            <AnimatedDropdown sort={sort} setSort={setSort} />
                        </div>

                        {
                            error ? <ErrorComponent /> : <>
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-col-8 4xl:grid-cols-9 gap-3 xl:gap-6">
                                    {filteredProducts.length > 0 && filteredProducts?.map((product, index) => (
                                        <div
                                            key={index}
                                            className="relative bg-gray-800 shadow-lg rounded hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden text-primary-text"
                                            onClick={() => handleProductClick(product)}
                                        >
                                            <div className='w-full xl:h-[300px] 3xl:h-[330px]'>
                                                {
                                                    product?.fields?.Images && product?.fields?.Images[0]?.url &&
                                                    <img src={product?.fields?.Images[0].url} alt={product?.fields?.Name} className='w-full hover:scale-[105%] transition-transform duration-300 brightness-[90%]' />
                                                }
                                            </div>
                                            {/* {product?.fields?.Name} */}
                                            <div className='absolute flex flex-col bottom-2 left-0 px-2 w-full'>
                                                <div className='bg-primary-text rounded p-2 xl:p-3 w-full'>
                                                    <h1 className='text-primary-bg font-forum xl:text-base text-sm'>{product?.fields?.Name}</h1>
                                                    <div className='flex xl:text-base text-sm'>
                                                        {
                                                            product?.fields.DiscountedPercentage == 0 ?
                                                                <div className=''>₹ {product?.fields?.Price}</div>
                                                                :
                                                                <div className='text-primary-bg'>₹ <s className='text-xs xl:text-sm text-red-500'>{product?.fields?.Price}</s> {product?.fields?.DiscountedPrice}</div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                                {filteredProducts.length === 0 && <NoProductsFound />}

                                {/* Modal */}
                                {selectedProduct && (
                                    <DesktopProductModal id={selectedProduct.id} handleCloseModal={handleCloseModal} selectedProduct={selectedProduct.fields} />
                                )}

                            </>
                        }

                    </>

            }
        </div>
    );
};

export default ProductPage;
