import Comments from "../Comments";

function Reviews() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-gray-800">
            Customer Reviews
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Trusted by thousands of happy customers every day.
          </p>

        </div>

        {/* Rating Summary */}

        <div className="grid md:grid-cols-4 gap-6 mb-16">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-orange-500">
              4.9 ⭐
            </h2>

            <p className="mt-3 text-gray-500">
              Average Rating
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-orange-500">
              10K+
            </h2>

            <p className="mt-3 text-gray-500">
              Happy Customers
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-orange-500">
              50+
            </h2>

            <p className="mt-3 text-gray-500">
              Delicious Dishes
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-orange-500">
              98%
            </h2>

            <p className="mt-3 text-gray-500">
              Positive Reviews
            </p>

          </div>

        </div>

        {/* Customer Reviews */}

        <Comments />

      </div>

    </div>
  );
}

export default Reviews;