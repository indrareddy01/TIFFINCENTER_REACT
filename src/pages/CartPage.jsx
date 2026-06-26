import Cart from "../Cart";
import OrderForm from "../OrderForm";
function CartPage({
  cartItems,
  customerDetails,
  setCustomerDetails,
  increaseQuantity,
  decreaseQuantity
}) {

  return (

    <div className="container-custom py-16">

      <h1 className="section-title">
        Checkout
      </h1>

      <OrderForm
        customerDetails={customerDetails}
        setCustomerDetails={setCustomerDetails}
      />

      <Cart
        cartItems={cartItems}
        customerDetails={customerDetails}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

    </div>

  );
}

export default CartPage;