
import { useState } from "react";

function Cart({
  cartItems,
  customerDetails,
  increaseQuantity,
  decreaseQuantity
}) {

  const [orderPlaced, setOrderPlaced] = useState(false);

 const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const deliveryFee = subtotal > 0 ? 40 : 0;
const discount = subtotal >= 300 ? 30 : 0;
const gst = Math.round(subtotal * 0.05);

const total =
  subtotal +
  deliveryFee +
  gst -
  discount;
  
  const handleOrder = () => {

    if (
      customerDetails.customer === "" ||
      customerDetails.item === "" ||
      customerDetails.address === ""
    ) {
      alert("Please fill the Order Form before proceeding.");
      return;
    }

    setOrderPlaced(true);

  };

  return (

    <div className="max-w-6xl mx-auto py-10">

      <h1 className="text-4xl font-bold text-center text-gray-800">
        🛒 Your Shopping Cart
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-10">
        Review your delicious order before checkout.
      </p>

      {/* Empty Cart */}
      {
        cartItems.length === 0 && !orderPlaced && (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some tasty tiffins from our menu.
            </p>

          </div>

        )
      }

      {/* Cart Items */}
      {
        cartItems.length > 0 && !orderPlaced && (

          <div className="space-y-6">

            {
              cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6"
                >

                  {/* Food */}
                  <div className="flex items-center gap-5">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />

                    <div>

                      <h2 className="text-2xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        Fresh & Delicious
                      </p>

                      <p className="text-orange-500 text-xl font-bold mt-2">
                        ₹ {item.price}
                      </p>

                    </div>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold"
                    >
                      +
                    </button>

                  </div>

                  {/* Total */}
                  <div>

                    <h2 className="text-3xl font-bold text-orange-500">
                      ₹ {item.price * item.quantity}
                    </h2>

                  </div>

                </div>

              ))
            }

           <div className="bg-white rounded-3xl shadow-xl p-8 border">

  <h2 className="text-3xl font-bold mb-8 text-gray-800">
    📋 Order Summary
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between text-lg">
      <span>Subtotal</span>
      <span>₹ {subtotal}</span>
    </div>

    <div className="flex justify-between text-lg">
      <span>Delivery Fee</span>
      <span>₹ {deliveryFee}</span>
    </div>

    <div className="flex justify-between text-lg text-green-600">
      <span>Discount</span>
      <span>- ₹ {discount}</span>
    </div>

    <div className="flex justify-between text-lg">
      <span>GST (5%)</span>
      <span>₹ {gst}</span>
    </div>

    <hr className="my-4"/>

    <div className="flex justify-between text-2xl font-bold">

      <span>Total</span>

      <span className="text-orange-500">
        ₹ {total}
      </span>

    </div>

  </div>

</div>

            <button
  onClick={handleOrder}
  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl text-xl font-bold shadow-lg transition duration-300 hover:scale-105"
>

  Proceed To Checkout →

</button>

          </div>

        )
      }

      {/* Success */}
      {
        orderPlaced && (

          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

            <div className="text-7xl mb-6">
              🎉
            </div>

            <h2 className="text-4xl font-bold text-green-600">
            🎉 Your Order Has Been Confirmed!
            </h2>

            <p className="mt-6 text-lg text-gray-600">

              Thank you,
              <span className="font-bold">
                {" "}
                {customerDetails.customer}
              </span>

            </p>

            <p className="mt-2 text-gray-500">
          Our chefs have started preparing your order.
            </p>

            <p className="mt-4 text-lg text-green-600 font-semibold">

Estimated Delivery:
<span className="text-orange-500">

  25 - 30 Minutes

</span>

</p>

<p className="text-gray-500 mt-3">

Thank you for choosing TiffinHub ❤️

</p>

          </div>

        )
      }

    </div>

  );
}

export default Cart;
