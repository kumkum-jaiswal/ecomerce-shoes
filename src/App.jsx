import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Watche from "./Pages/Watche";
import Products from "./Pages/Products";
import Sale from "./Pages/Sale";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";

import MyCart from "./Pages/MyCart";
import KidsProduct from "./Pages/KidsProduct";
import PremiumWatches from "./Pages/PremiumWatches";
import MenProduct from "./Pages/MenProduct";
import WomenProduct from "./Pages/WomenProduct";
import ProductSearch from "./Pages/ProductSearch";
import Checkout from "./Pages/Checkout";
import PaymentDone from "./Pages/PaymentDone";



const App = () => {
  return ( 
    <>
    {/* <Layout/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Product" element={<Products/>}/>
        <Route path="/watch" element={<Watche/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/kidsProduct" element={<KidsProduct/>}/>
        <Route path="/mensProduct" element={<MenProduct/>} />
        <Route path="/preshoes" element={<PremiumWatches/>} />
        <Route path="/womensProduct" element={<WomenProduct/>} />
        <Route path="/searchproduct/:txtdata" element={<ProductSearch/>} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/paydone" element={<PaymentDone/>} />


        </Route>
      </Routes>
    </BrowserRouter>
    </>
   );
}
 
export default App;