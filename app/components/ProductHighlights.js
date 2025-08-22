import ProductCard from "./ProductCard";

const sampleProducts = [
  { id: 1, name: "Laptop", description: "A powerful laptop", price: 1200 },
  { id: 2, name: "Phone", description: "Latest smartphone", price: 800 },
  { id: 3, name: "Headphones", description: "Noise cancelling", price: 200 },
];

const ProductHighlights = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;
