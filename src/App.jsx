import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Saloon from "./pages/Saloon";
import Fashion from "./pages/Fashion";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/saloon' element={<Saloon />} />
        <Route path='/fashion' element={<Fashion />} />

        <Route path='/fashion/fashion-store/:category' element={<ProductPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/lander' element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;