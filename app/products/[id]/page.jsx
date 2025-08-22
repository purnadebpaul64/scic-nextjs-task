import React from "react";

async function getProduct(id) {
  // Use relative path, Next.js handles it in both dev & prod
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

const page = async ({ params }) => {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          ❌ Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <div className="border rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          ${product.price}
        </p>

        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default page;
