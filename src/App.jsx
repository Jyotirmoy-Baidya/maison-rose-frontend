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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/saloon' element={<Saloon />} />

        <Route path='/fashion' element={<Fashion />} />

        <Route path='/store' element={<Fashion />} />

        <Route path='/fashion-store/t/:category' element={<ProductPage />} />
        <Route path='fashion-store/:type/:cat/:subcat' element={<ProductPage />} />
        <Route path='fashion-store/c/:cat' element={<ProductPage />} />
        <Route path='fashion-store/:type' element={<ProductPage />} />

        <Route path='/check/:id' element={<ProductListPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/combos' element={<Combos />} />
        <Route path='/lander' element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;