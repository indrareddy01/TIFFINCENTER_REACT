function FoodCard({
  name,
  price,
  image,
  rating,
  delivery,
  description,
  addToCart
}) {

  return (

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="relative">

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />

        {/* Veg Badge */}
        <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">

          🟢 Veg

        </span>

        {/* Rating */}
        <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold">

          ⭐ {rating}

        </span>

      </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800">
          {name}
        </h2>

        <p className="text-gray-500 mt-3 leading-7">
          {description}
        </p>

        {/* Delivery */}
        <div className="flex justify-between mt-5 text-gray-500">

          <span>
            🚚 {delivery}
          </span>

          <span>
            Fresh Today
          </span>

        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-6">

          <h2 className="text-3xl font-bold text-orange-500">
            ₹ {price}
          </h2>

          <button
            onClick={addToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition shadow hover:shadow-lg"
          >

            🛒 Add

          </button>

        </div>

      </div>

    </div>

  );

}

export default FoodCard;