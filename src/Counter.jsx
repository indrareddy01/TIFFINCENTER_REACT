import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (

    <div className="text-center mt-10">

      <h1 className="text-3xl font-bold">
        Counter Program
      </h1>

      <h2 className="text-4xl my-5">
        {count}
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-5 py-2 rounded mr-3"
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-5 py-2 rounded"
      >
        Decrement
      </button>

    </div>
  );
}

export default Counter;