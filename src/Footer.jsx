import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h1 className="text-4xl font-bold text-orange-500 mb-5">
              TiffinHub
            </h1>

            <p className="text-gray-400 leading-8">

              Fresh South Indian breakfast delivered to your doorstep.
              Quality ingredients, authentic taste, and quick delivery.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover:text-orange-400">
                  Menu
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-orange-400">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/reviews" className="hover:text-orange-400">
                  Reviews
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Contact
            </h2>

            <div className="space-y-3 text-gray-400">

              <p>📍 Hyderabad, Telangana</p>

              <p>📞 +91 9876543210</p>

              <p>📧 support@tiffinhub.com</p>

              <p>🕒 7:00 AM – 10:00 PM</p>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Newsletter
            </h2>

            <p className="text-gray-400 mb-5">

              Subscribe to receive offers and updates.

            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl text-black mb-4"
            />

            <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition">

              Subscribe

            </button>

          </div>

        </div>

        {/* Bottom */}

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">

            © 2026 TiffinHub. All Rights Reserved.

          </p>

          <div className="flex gap-5 mt-5 md:mt-0 text-2xl">

            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">▶️</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;