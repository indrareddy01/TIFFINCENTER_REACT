function OrderForm({
  customerDetails,
  setCustomerDetails
}) {

  // Handle Input Change
  const handleChange = (e) => {

    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    });

  };

  return (

<div className="bg-white rounded-3xl shadow-xl p-8">

<h2 className="text-3xl font-bold mb-8">

Customer Details

</h2>

<div className="grid gap-6">

<input
type="text"
name="customer"
placeholder="Full Name"
value={customerDetails.customer}
onChange={handleChange}
className="input-field"
/>

<input
type="text"
name="item"
placeholder="Food Item"
value={customerDetails.item}
onChange={handleChange}
className="input-field"
/>

<textarea
name="address"
rows="5"
placeholder="Delivery Address"
value={customerDetails.address}
onChange={handleChange}
className="input-field"
/>

</div>

</div>
  );
}

export default OrderForm;