function Bill() {

  // Rest Operator
  function calculateBill(...prices) {

    let total = prices.reduce(
      (sum, value) => sum + value,
      0
    );

    return total;
  }

  return (

    <div className="bg-white p-5 m-5 rounded shadow">

      <h1 className="text-2xl font-bold mb-3">
        Rest Operator Example
      </h1>

      <p className="text-lg">
        Total Bill: ₹ {calculateBill(30, 40, 50)}
      </p>

    </div>
  );
}

export default Bill;