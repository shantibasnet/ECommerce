import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./pages/productlist";

import NavBar from "./component/nav";
import Footer from "./component/footer";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar  />
          <Routes>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="product" element={<ProductList />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="404" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
