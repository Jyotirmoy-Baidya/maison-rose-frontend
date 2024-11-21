import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cafe' element={<Cafe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;