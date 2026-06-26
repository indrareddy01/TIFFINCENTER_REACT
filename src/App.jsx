import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const [customerDetails, setCustomerDetails] = useState({
    customer: "",
    item: "",
    address: ""
  });

  const foods = [
    {
      id: 1,
      name: "Idli",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
    },
    {
      id: 2,
      name: "Masala Idly",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1630383249896-424e482df921"
    },
    {
      id: 3,
      name: "Samosa",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950"
    },
    {
      id: 4,
      name: "chapati",
      price: 50,
      image: "https://tastythriftytimely.com/wp-content/uploads/2025/06/Chapati-FEATURED.jpg"
        
    },
    {
      id: 5,
      name: "bonda",
      price: 45,
      image:
        "https://kalimirchbysmita.com/wp-content/uploads/2016/07/Mysore-Bonda-02-1024x730.jpg"
    }
    ,{
      id: 6,
      name: "Puri",
      price: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNaeZ_Pp3DO8QFUvIAIMTNOpTT7SKbKr3ew&s"
    }

  ];

  const addToCart = (food) => {

    const existingItem = cartItems.find(
      (item) => item.id === food.id
    );

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...food,
          quantity: 1
        }
      ]);

    }

  };

  const increaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  const decreaseQuantity = (id) => {

    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  return (

    <>
      <Navbar
        cartCount={
          cartItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          )
        }
      />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/menu"
          element={
            <Menu
              foods={foods}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              customerDetails={customerDetails}
              setCustomerDetails={setCustomerDetails}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;