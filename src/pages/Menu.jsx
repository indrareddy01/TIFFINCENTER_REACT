import FoodCard from "../FoodCard";

function Menu({
  foods,
  addToCart
}) {

  return (

    <section className="container-custom py-16">

      <h1 className="section-title">
        Our Special Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          foods.map((food) => (

            <FoodCard
              key={food.id}
              {...food}
              addToCart={() => addToCart(food)}
            />

          ))
        }

      </div>

    </section>

  );
}

export default Menu;