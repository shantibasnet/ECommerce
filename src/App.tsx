import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home"
import ProductList from "./pages/productlist"
import ProductDetails from "./pages/productDetails"
import NavBar from "./component/nav"
import Footer from "./component/footer"




export default function App() {
  return (
<>
<div>
<Router>
  <NavBar/>
  <Routes>
    <Route path="home" element={<Home/>}/>
    <Route path="Productlist" element={<ProductList/>}/>
    <Route path="Productdetails" element={<ProductDetails/>}/>  
    </Routes>

  <Footer/>
</Router>
</div>
  </>
  )
}