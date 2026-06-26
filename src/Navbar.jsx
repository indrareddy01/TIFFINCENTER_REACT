import { Link, NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl">

            🍽️

          </div>

          <div>

            <h1 className="text-3xl font-bold text-orange-500">
              TiffinHub
            </h1>

            <p className="text-xs text-gray-500">
              Fresh • Fast • Healthy
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <ul className="hidden md:flex gap-8 font-semibold">

          <li>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "hover:text-orange-500 transition"
              }
            >
              Home
            </NavLink>

          </li>

          <li>

            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "hover:text-orange-500 transition"
              }
            >
              Menu
            </NavLink>

          </li>

          <li>

            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "hover:text-orange-500 transition"
              }
            >
              Reviews
            </NavLink>

          </li>

          <li>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "hover:text-orange-500 transition"
              }
            >
              Contact
            </NavLink>

          </li>

        </ul>

        {/* Cart */}

        <NavLink
          to="/cart"
          className="relative"
        >

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">

            🛒 Cart

          </button>

          {cartCount > 0 && (

            <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">

              {cartCount}

            </span>

          )}

        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;