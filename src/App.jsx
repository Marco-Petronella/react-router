
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Products from "./pages/Products.jsx";
import DefaultLayout from "./assets/DefaultLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={DefaultLayout()}>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
