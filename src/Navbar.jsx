import { Link } from "react-router-dom";

function Navbar({ cartCount }) {

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="container-custom flex justify-between items-center py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-orange-500">
          TiffinHub
        </h1>

        {/* Navigation */}
        <ul className="flex gap-8 font-medium text-gray-700">

          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/menu"
              className="hover:text-orange-500 transition"
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="hover:text-orange-500 transition"
            >
              Cart ({cartCount})
            </Link>
          </li>

          <li>
            <Link
              to="/reviews"
              className="hover:text-orange-500 transition"
            >
              Reviews
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>

  );
}

export default Navbar;