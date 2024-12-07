import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Salon from "./pages/Salon";
import Fashion from "./pages/Fashion";
import ProductPage from "./pages/ProductPage";
import Combos from './pages/Combos';
import Footer from './components/Footer';
import DesktopNavbar from "./components/basics/DesktopNavbar";
import ScrollToTopOnRouteChange from "./utils/ScrollToTopOnRouteChange";
import WhatsAppComponent from "./components/basics/WhatsAppComponent";
import MobileNavbar from "./components/basics/MobileNavbar";
import Nailarts from "./pages/Nailarts";
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ScrollToTopOnRouteChange />
        <DesktopNavbar />
        <MobileNavbar />
        <WhatsAppComponent />
        <div className="flex-1 bg-primary-bg pt-16 xl:pt-0">
          <Routes>
            <Route path='/' element={<Home />} />

            {/* cafe routes   */}
            <Route path='/cafe' element={<Cafe />} />
            <Route path='/combos' element={<Combos />} />

            {/* salon routes  */}
            <Route path='/salon' element={<Salon />} />
            <Route path='/nailarts' element={<Nailarts />} />

            {/* Store Routes  */}
            <Route path='/store' element={<Fashion />} />
            {/* Search: any dynamic search */}
            <Route path='/fashion-store/s/:filterSearch' element={<ProductPage />} />
            {/* Sub Category: satin, ruffle  */}
            <Route path='fashion-store/c/:cat/:subcat' element={<ProductPage />} />
            {/* Category: dress, co-ords  */}
            <Route path='fashion-store/c/:cat' element={<ProductPage />} />
            {/* whats new  */}
            <Route path='fashion-store/new/:whatsnew' element={<ProductPage />} />
            {/* Type: dress, hats, jewellery  */}
            <Route path='fashion-store/:type' element={<ProductPage />} />
            <Route path='/product/:productId' element={<ProductDetails />} />


            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<About />} />
            <Route path='/lander' element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;