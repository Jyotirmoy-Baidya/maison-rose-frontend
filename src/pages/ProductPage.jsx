import React, { useEffect, useState } from 'react';
import Navbar from '../components/basics/Navbar';
import { IoSearchSharp } from 'react-icons/io5';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AnimatedDropdown from '../components/store/AnimatedDropdown';
import DesktopProductModal from '../components/store/DesktopProductModal';
import MobileNavbar from '../components/basics/MobileNavbar';
import { ClimbingBoxLoader, ClipLoader } from 'react-spinners';
import { override } from '../constants/basic';
import DesktopStoreNavbar from '../components/basics/DesktopStoreNavbar';
import { fetchFilteredProductsOnCategory, fetchFilteredProductsOnSearch, fetchFilteredProductsOnSubCategory, fetchFilteredProductsOnType } from '../api/AirtableApis';
import ErrorComponent from '../components/basics/ErrorComponent';
import NoProductsFound from '../components/basics/NoProductsFound';

const ProductPage = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('default'); // Sorting options: 'default', 'asc', 'desc'
    const [selectedProduct, setSelectedProduct] = useState(null);


    const { type, cat, subcat, filterSearch } = useParams(); // Extract parameters

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
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getFilteredProducts();


    }, [type, cat, subcat, filterSearch]);

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

    const handleShareLink = () => {
        if (selectedProduct) {
            navigator.clipboard.writeText(selectedProduct.amazonLink);
            alert('Product link copied to clipboard!');
        }
    };

    const navigation = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // Set a timer to simulate loading for 1 second
    //     const timer = setTimeout(() => {
    //         setLoading(false); // Hide the loading screen after 1 second
    //     }, 3000);

    //     // Cleanup the timer if the component unmounts
    //     return () => clearTimeout(timer);
    // }, []); // Empty dependency array to run only once on mount

    return (
        <div className="bg-primary-bg flex flex-col  min-h-screen p-3 xl:p-6">
            <DesktopStoreNavbar />
            <MobileNavbar />

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
                        <div className='xl:flex items-center gap-2 w-96 hidden fixed z-10 p-3 top-10 right-10 rounded-xl searchbar '>
                            <div className='uppercase h-full w-full'>
                                <input type="text" className='w-full bg-[#18181895] backdrop-blur-sm  rounded-xl text-primary-text h-full border-2 px-3 py-2 border-primary-border outline-none' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div className='text-xl text-primary-text' onClick={() => { if (search != '') navigate(`/fashion-store/s/${search}`) }}><IoSearchSharp /></div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 xl:justify-between items-end xl:items-center xl:mt-24 mb-3 mt-2">

                            <div className='text-primary-text text-3xl'>{type || cat || subcat || filterSearch || ''}</div>
                            {/* <div className='xl:flex flex w-full h-[50px] border-2 border-primary-border px-2 rounded-lg items-center gap-2 searchbar '>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-grow font-forum  text-primary-text h-full bg-primary-bg px-3 py-3 outline-none focus:outline-none "
                                />
                                <div className='text-xl text-primary-text'><IoSearchSharp /></div>
                            </div> */}





                            <AnimatedDropdown sort={sort} setSort={setSort} />
                        </div>
                        {/* <div className='w-full mb-2 text-primary-text font-forum text-3xl capitalize tracking-wide navigation-list'>{params.category}</div> */}


                        {
                            error ? <ErrorComponent /> : <>
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-col-8 4xl:grid-cols-9 gap-3 xl:gap-6">
                                    {filteredProducts.length > 0 && filteredProducts?.map((product, index) => (
                                        <div
                                            key={index}
                                            className="relative bg-gray-800 shadow-lg rounded hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden text-primary-text"
                                            onClick={() => handleProductClick(product.fields)}
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
                                            {/* <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-indigo-400">
                                ₹{product.discountedPrice}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                                ₹{product.price}
                            </span>
                        </div>
                        <p
                            className={`font-semibold ${product.availability === 'In Stock'
                                ? 'text-green-400'
                                : 'text-red-400'
                                }`}
                        >
                            {product.availability}
                        </p> */}
                                        </div>
                                    ))}

                                </div>
                                {filteredProducts.length === 0 && <NoProductsFound />}

                                {/* Modal */}
                                {selectedProduct && (
                                    <DesktopProductModal handleCloseModal={handleCloseModal} selectedProduct={selectedProduct} />
                                )}

                            </>
                        }

                    </>

            }
        </div>
    );
};

export default ProductPage;
