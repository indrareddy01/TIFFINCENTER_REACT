import Hero from "../Hero";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Popular Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🥞</div>
              <h3 className="text-xl font-bold">Breakfast</h3>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🥟</div>
              <h3 className="text-xl font-bold">Snacks</h3>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🍛</div>
              <h3 className="text-xl font-bold">Meals</h3>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🥤</div>
              <h3 className="text-xl font-bold">Beverages</h3>
            </div>

          </div>

        </div>
      </section>

      {/* Best Sellers */}

      <section className="py-20 bg-gray-50">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            🍽 Best Sellers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition">
              <div className="text-6xl">🥞</div>
              <h3 className="text-2xl font-bold mt-4">Idli</h3>
              <p className="text-gray-500 mt-3">
                Soft steamed rice cakes served with sambar and chutney.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition">
              <div className="text-6xl">🥟</div>
              <h3 className="text-2xl font-bold mt-4">Masala Idli</h3>
              <p className="text-gray-500 mt-3">
                Spicy fried idli tossed with authentic masala.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition">
              <div className="text-6xl">🍛</div>
              <h3 className="text-2xl font-bold mt-4">Poori</h3>
              <p className="text-gray-500 mt-3">
                Fluffy pooris served with delicious potato curry.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-20 bg-white">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose TiffinHub?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-500">
                Delivered within 30 minutes.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-2xl font-bold mb-3">Fresh Food</h3>
              <p className="text-gray-500">
                Prepared with premium ingredients.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold mb-3">Expert Chefs</h3>
              <p className="text-gray-500">
                Authentic South Indian recipes.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-3xl text-center shadow-lg">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">Top Rated</h3>
              <p className="text-gray-500">
                Rated 4.9 by thousands of customers.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="bg-orange-500 py-20 text-white">

        <div className="container mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-5xl font-bold">10K+</h2>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">50+</h2>
              <p className="mt-2">Food Items</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">4.9★</h2>
              <p className="mt-2">Customer Rating</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">30 Min</h2>
              <p className="mt-2">Average Delivery</p>
            </div>

          </div>

        </div>

      </section>

      {/* Offer */}

      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-orange-500 rounded-3xl text-white p-12 text-center shadow-2xl">

            <h2 className="text-5xl font-bold mb-6">
              🎉 Today's Special Offer
            </h2>

            <p className="text-2xl mb-8">
              Get Flat 20% OFF on your first order.
            </p>

            <h3 className="text-4xl font-extrabold mb-8">
              Use Code: TIFFIN20
            </h3>

            <Link to="/menu">
              <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition">
                Order Now
              </button>
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;