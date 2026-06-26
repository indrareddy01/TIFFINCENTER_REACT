function FoodCard({
  name,
  price,
  image,
  addToCart
}) {

  return (

    <div className="card overflow-hidden">

      {/* Food Image */}
      <img
        src={image}
        alt={name}
        className="h-56 w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* Content */}
      <div className="p-5">

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          {name}
        </h2>

        <p className="text-orange-500 font-bold text-2xl mb-4">
          ₹ {price}
        </p>

        {/* Add To Cart Button */}
        <button
          onClick={addToCart}
          className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-3
            rounded-xl
            font-semibold
            text-lg
            transition
            duration-300
            shadow-md
            hover:shadow-xl
            active:scale-95
          "
        >

          🛒 Add To Cart

        </button>

      </div>

    </div>
  );
}

export default FoodCard;