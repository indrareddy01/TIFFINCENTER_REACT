import { useState } from "react";

function Cart({
  cartItems,
  customerDetails,
  increaseQuantity,
  decreaseQuantity
}) {

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);

  // Proceed Order Function
  const handleOrder = () => {

    // Validation
    if (
      customerDetails.customer === "" ||
      customerDetails.item === "" ||
      customerDetails.address === ""
    ) {

      alert(
        "Please fill the Order Form before proceeding."
      );

      return;
    }

    setOrderPlaced(true);

  };

  return (

    <div>

      <h1 className="section-title">
        Your Cart
      </h1>

      {/* Empty Cart */}
      {
        cartItems.length === 0 && !orderPlaced && (

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">

            <h2 className="text-2xl font-semibold text-gray-600">
              Cart is Empty
            </h2>

          </div>

        )
      }

      {/* Cart Items */}
      {
        cartItems.length > 0 && !orderPlaced && (

          <div className="grid gap-5">

           {
  cartItems.map((item) => (

    <div
      key={item.id}
      className="
        bg-white
        p-5
        rounded-2xl
        shadow-md
        flex
        justify-between
        items-center
      "
    >

      {/* Left Side */}
      <div className="flex items-center gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="
            w-24
            h-24
            object-cover
            rounded-xl
          "
        />

        <div>

          <h2 className="text-xl font-semibold">
            {item.name}
          </h2>

          <p className="text-gray-500">
            ₹ {item.price}
          </p>

        </div>

      </div>

      {/* Counter */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => decreaseQuantity(item.id)}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            w-10
            h-10
            rounded-full
            font-bold
          "
        >
          -
        </button>

        <span className="text-xl font-bold">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            w-10
            h-10
            rounded-full
            font-bold
          "
        >
          +
        </button>

      </div>

      {/* Item Total */}
      <h2 className="text-orange-500 text-2xl font-bold">
        ₹ {item.price * item.quantity}
      </h2>

    </div>

  ))
}

            {/* Total */}
            <div
              className="
                bg-orange-500
                text-white
                p-5
                rounded-2xl
                text-right
                text-2xl
                font-bold
              "
            >
              Total: ₹ {total}
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleOrder}
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                py-4
                rounded-2xl
                text-xl
                font-semibold
                transition
                shadow-md
                hover:shadow-xl
              "
            >

              ✅ Proceed Order

            </button>

          </div>

        )
      }

      {/* Success Message */}
      {
        orderPlaced && (

          <div
            className="
              bg-white
              p-10
              rounded-2xl
              shadow-md
              text-center
            "
          >

            <h1 className="text-5xl mb-5">
              🎉
            </h1>

            <h2 className="text-3xl font-bold text-green-600 mb-3">

              Order Placed Successfully!

            </h2>

            <p className="text-gray-600 text-lg mb-2">

              Thank You,
              {" "}
              <span className="font-semibold">
                {customerDetails.customer}
              </span>

            </p>

            <p className="text-gray-600">

              Your delicious tiffins are being prepared 🍽️

            </p>

          </div>

        )
      }

    </div>
  );
}

export default Cart;