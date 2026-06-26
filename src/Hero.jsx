import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 min-h-[90vh] flex items-center">

      <div className="container mx-auto px-6 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
              🍽️ Welcome to TiffinHub
            </span>

            <h1 className="text-6xl font-extrabold text-gray-800 mt-6 leading-tight">

              Fresh South Indian
              <span className="text-orange-500">
                {" "}Breakfast
              </span>

              <br />

              Delivered To Your Door

            </h1>

            <p className="text-gray-600 text-xl mt-6 leading-8">

              Start your day with delicious, hygienic, and freshly
              prepared South Indian breakfast delivered hot to your home.

            </p>

            <div className="flex gap-5 mt-10">

              <Link to="/menu">

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition">

                  🍛 Order Now

                </button>

              </Link>

              <Link to="/reviews">

                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition">

                  ⭐ Reviews

                </button>

              </Link>

            </div>

            <div className="flex gap-10 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  10K+
                </h2>

                <p className="text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  50+
                </h2>

                <p className="text-gray-500">
                  Tasty Dishes
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  4.9★
                </h2>

                <p className="text-gray-500">
                  Customer Rating
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900"
              alt="South Indian Food"
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;