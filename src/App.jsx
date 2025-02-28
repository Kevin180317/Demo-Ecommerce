// App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (productName, productImage, productPrice) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: {
        quantity: (prevCart[productName]?.quantity || 0) + 1,
        image: productImage,
        price: productPrice,
      },
    }));
  };

  const total = Object.values(cart).reduce(
    (sum, { quantity, price }) => sum + quantity * price,
    0
  );

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} total={total} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
