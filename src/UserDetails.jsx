import { useEffect, useState } from "react";

function UserDetails() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

  }, []);

  return (

    <div className="p-5">

      <h1 className="text-2xl font-bold mb-5">
        User Details
      </h1>

      {
        users.map((user) => (

          <div
            key={user.id}
            className="bg-white p-3 mb-3 rounded shadow"
          >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

        ))
      }

    </div>
  );
}

export default UserDetails;