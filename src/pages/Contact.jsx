import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    setForm({
      name: "",
      email: "",
      message: ""
    });

  };

  return (

    <section className="bg-gray-50 py-20">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-gray-800">

            Contact Us

          </h1>

          <p className="text-gray-500 text-lg mt-4">

            We'd love to hear from you.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">

              Send a Message

            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition"
              >

                Send Message

              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-3xl font-bold mb-6">

                Get In Touch

              </h2>

              <div className="space-y-5 text-lg">

                <p>
                  📍 Hyderabad, Telangana
                </p>

                <p>
                  📞 +91 9876543210
                </p>

                <p>
                  📧 support@tiffinhub.com
                </p>

                <p>
                  🕒 Open Daily: 7:00 AM - 10:00 PM
                </p>

              </div>

            </div>

            <div className="bg-orange-500 text-white rounded-3xl shadow-xl p-8">

              <h2 className="text-3xl font-bold mb-4">

                Why Customers Love Us ❤️

              </h2>

              <ul className="space-y-4 text-lg">

                <li>✅ Fresh Ingredients</li>

                <li>🚚 Fast Delivery</li>

                <li>👨‍🍳 Experienced Chefs</li>

                <li>⭐ 4.9 Customer Rating</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;