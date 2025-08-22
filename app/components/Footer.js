import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Shop. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
