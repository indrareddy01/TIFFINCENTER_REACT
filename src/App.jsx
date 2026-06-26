import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {

  // -----------------------
  // Cart State
  // -----------------------

  const [cartItems, setCartItems] = useState([]);

  // -----------------------
  // Customer Details
  // -----------------------

  const [customerDetails, setCustomerDetails] = useState({
    customer: "",
    item: "",
    address: ""
  });

  // -----------------------
  // Food Data
  // -----------------------

  const foods = [
    {
      id: 1,
      name: "Idli",
      price: 30,
      rating: 4.8,
      delivery: "20 mins",
      category: "Breakfast",
      description: "Soft steamed rice cakes served with sambar & chutney.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800"
    },
    {
      id: 2,
      name: "Masala Idli",
      price: 60,
      rating: 4.9,
      delivery: "25 mins",
      category: "Breakfast",
      description: "Spicy fried idli tossed with South Indian masala.",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800"
    },
    {
      id: 3,
      name: "Samosa",
      price: 40,
      rating: 4.7,
      delivery: "15 mins",
      category: "Snacks",
      description: "Crispy potato-filled samosas served hot.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800"
    },
    {
      id: 4,
      name: "Chapati",
      price: 50,
      rating: 4.8,
      delivery: "20 mins",
      category: "Meals",
      description: "Soft whole wheat chapatis with curry.",
      image: "https://tastythriftytimely.com/wp-content/uploads/2025/06/Chapati-FEATURED.jpg"
    },
    {
      id: 5,
      name: "Bonda",
      price: 45,
      rating: 4.6,
      delivery: "18 mins",
      category: "Snacks",
      description: "Golden crispy Mysore bonda served with chutney.",
      image: "https://kalimirchbysmita.com/wp-content/uploads/2016/07/Mysore-Bonda-02-1024x730.jpg"
    },
    {
      id: 6,
      name: "Poori",
      price: 55,
      rating: 4.9,
      delivery: "22 mins",
      category: "Breakfast",
      description: "Fluffy pooris served with delicious potato curry.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNaeZ_Pp3DO8QFUvIAIMTNOpTT7SKbKr3ew&s"
    }
  ];

  // -----------------------
  // Add To Cart
  // -----------------------

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

  // -----------------------
  // Increase Quantity
  // -----------------------

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

  // -----------------------
  // Decrease Quantity
  // -----------------------

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

  // -----------------------
  // RETURN STARTS HERE
  // -----------------------

  return (<>
  {/* Navbar */}
  <Navbar
    cartCount={
      cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
    }
  />

  {/* Routes */}
  <Routes>

    {/* Home */}
    <Route
      path="/"
      element={<Home />}
    />

    {/* Menu */}
    <Route
      path="/menu"
      element={
        <Menu
          foods={foods}
          addToCart={addToCart}
        />
      }
    />

    {/* Cart */}
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

    {/* Reviews */}
    <Route
      path="/reviews"
      element={<Reviews />}
    />

    {/* Contact */}
    <Route
      path="/contact"
      element={<Contact />}
    />

  </Routes>

  {/* Footer */}
  <Footer />

</>
  );

}

export default App;