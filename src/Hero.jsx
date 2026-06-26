function Hero() {

  return (

    <section className="bg-orange-50 py-20">

      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">

            Fresh & Delicious
            <span className="text-orange-500">
              {" "}Tiffins
            </span>

          </h1>

          <p className="text-gray-600 text-lg mb-6">

            Enjoy healthy and tasty South Indian breakfast
            delivered directly to your home.

          </p>

          <button className="btn-primary">
            Order Now
          </button>

        </div>

        {/* Right Side */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
            alt="Tiffin"
            className="rounded-2xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;