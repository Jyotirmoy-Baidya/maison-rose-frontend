import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Saloon from "./pages/Saloon";
import Fashion from "./pages/Fashion";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import Combos from './pages/Combos';
import Footer from './components/Footer';
import DesktopStoreNavbar from "./components/basics/DesktopStoreNavbar";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopOnRouteChange from "./utils/ScrollToTopOnRouteChange";
import Nailarts from "./pages/Nailarts";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ScrollToTopOnRouteChange />
        <DesktopStoreNavbar />
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cafe' element={<Cafe />} />
            <Route path='/salon' element={<Saloon />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/store' element={<Fashion />} />
            <Route path='/fashion-store/s/:filterSearch' element={<ProductPage />} />
            <Route path='fashion-store/c/:cat/:subcat' element={<ProductPage />} />
            <Route path='fashion-store/c/:cat' element={<ProductPage />} />
            <Route path='fashion-store/:type' element={<ProductPage />} />
            <Route path='/check/:id' element={<ProductListPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<About />} />
            <Route path='/combos' element={<Combos />} />
            <Route path='/nailarts' element={<Nailarts />} />
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