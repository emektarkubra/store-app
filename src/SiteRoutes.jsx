import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsLayout from "./pages/ProductsLayout";
import Signup from "./pages/Signup";

export default function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index={true} element={<ProductList />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="product/:productId" element={<Product />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
