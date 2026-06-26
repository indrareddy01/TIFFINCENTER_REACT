import React from "react";

function Comments() {

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      review:
        "The food was fresh and delicious. The Idli was soft and the delivery was very fast.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Emma Johnson",
      review:
        "Excellent quality and affordable prices. Masala Dosa was crispy and tasty.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      name: "Michael Brown",
      review:
        "One of the best tiffin centers in the city. Highly recommended for breakfast lovers.",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 4,
      name: "Sophia Davis",
      review:
        "Great customer service and quick delivery. Food arrived hot and fresh.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 5,
      name: "David Wilson",
      review:
        "The Poori and chutney combination was amazing. Will definitely order again.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 6,
      name: "Olivia Taylor",
      review:
        "Healthy, hygienic, and tasty food. Perfect place for daily breakfast orders.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (

    <div>

      <h1 className="section-title">
        Customer Reviews
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {
          reviews.map((review) => (

            <div
              key={review.id}
              className="
                bg-white
                p-6
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition
              "
            >

              <div className="flex items-center gap-4 mb-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-orange-500
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-lg
                  "
                >
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h2 className="font-semibold text-lg">
                    {review.name}
                  </h2>

                  <p className="text-yellow-500">
                    {review.rating}
                  </p>

                </div>

              </div>

              <p className="text-gray-600 leading-relaxed">

                "{review.review}"

              </p>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Comments;