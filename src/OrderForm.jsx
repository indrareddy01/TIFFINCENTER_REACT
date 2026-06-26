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

    <div className="bg-white p-8 rounded-2xl shadow-md">

      <div className="grid gap-5">

        {/* Name */}
        <input
          type="text"
          name="customer"
          placeholder="Enter Your Name"
          value={customerDetails.customer}
          onChange={handleChange}
          className="input-field"
        />

        {/* Food */}
        <input
          type="text"
          name="item"
          placeholder="Enter Food Item"
          value={customerDetails.item}
          onChange={handleChange}
          className="input-field"
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Enter Delivery Address"
          value={customerDetails.address}
          onChange={handleChange}
          className="input-field h-32"
        />

      </div>

    </div>
  );
}

export default OrderForm;