import ProductCard from "../components/ProductCard";

async function getProducts() {
  // Fetch products from API (SSR-friendly)
  // const res = await fetch(`http://localhost:3000/api/products`, {
  //   cache: "no-store", // ensure fresh data
  // });
  const res = await fetch(`https://scic-nextjs-task.vercel.app/api/products`, {
    cache: "no-store", // ensure fresh data
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

const page = async () => {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
