function Comments() {

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      review: "The food was fresh and delicious. The Idli was soft and delivery was quick.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Emma Johnson",
      review: "Excellent quality and affordable prices. Highly recommended.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      name: "Michael Brown",
      review: "Amazing breakfast. I loved the Poori and Masala Idli.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 4,
      name: "Sophia Davis",
      review: "Very hygienic food with fast delivery service.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 5,
      name: "David Wilson",
      review: "One of the best tiffin centers. Will definitely order again.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 6,
      name: "Olivia Taylor",
      review: "Fresh food, friendly staff and great taste.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (

    <div>

      <h2 className="text-4xl font-bold text-center mb-10">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
          >

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">

                {review.name.charAt(0)}

              </div>

              <div>

                <h3 className="font-bold">
                  {review.name}
                </h3>

                <p className="text-yellow-500">
                  {review.rating}
                </p>

              </div>

            </div>

            <p className="text-gray-600">

              "{review.review}"

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Comments;