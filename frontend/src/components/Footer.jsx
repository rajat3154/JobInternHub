import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12">
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-black"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Branding Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">AspireNext</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your trusted platform to connect employers with skilled candidates.
            Find your dream job or hire the right talent, all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-blue-400 transition-colors">
                Find Jobs
              </a>
            </li>
            <li>
              <a
                href="/employers"
                className="hover:text-blue-400 transition-colors"
              >
                For Employers
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Newsletter Subscription Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to our newsletter for job updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 mt-8 py-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-white">JobConnect</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
