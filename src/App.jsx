import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

const MyContext = createContext();

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MyContext.Provider value={{ count, setCount, cartProducts, setCartProducts }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="checkoutPage" element={<CheckoutPage />} />
              <Route path="success" element={<CheckoutSuccessPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </ThemeProvider>
  );
}

export { App, MyContext };