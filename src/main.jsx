import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import Homepage from "./pages/Homepage.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import Confirmation from "./pages/Confirmation.jsx";

import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";

import { CartProvider } from "./contexts/CartContext.jsx";
import { CheckoutProvider } from "./contexts/CheckoutContext.jsx";
import { Login } from "./components/Authentication/Login.jsx";
import { Register } from "./components/Authentication/Register.jsx";
import MyStore from "./pages/MyStore.jsx";
import { Support } from "./pages/Support.jsx";
import { Auth } from "./components/Authentication/Auth.jsx";
import { Logout } from "./components/Authentication/Logout.jsx";
import { AddProduct } from "./pages/AddProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth>
    <DatabaseProvider>
      <CartProvider>
        <CheckoutProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<Products />} >
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/mystore" element={<MyStore />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </CheckoutProvider>
      </CartProvider>
    </DatabaseProvider>
  </Auth>
);
