import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to <span className="text-blue-600">My Shop</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Discover high-quality products at unbeatable prices. Shop smart, live
        better!
      </p>
      <Link
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Browse Products
      </Link>
    </section>
  );
};

export default Hero;
