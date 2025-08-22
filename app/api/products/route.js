export const products = [
  { id: 1, name: "Laptop", description: "A fast laptop for work", price: 1200 },
  { id: 2, name: "Phone", description: "A powerful smartphone", price: 800 },
  {
    id: 3,
    name: "Headphones",
    description: "Noise cancelling headphones",
    price: 200,
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise cancelling headphones",
    price: 300,
  },
  {
    id: 5,
    name: "Headpes",
    description: "Noise cancelling headphones",
    price: 875,
  },
  {
    id: 6,
    name: "Headphs",
    description: "Noise cancellineadphones",
    price: 250,
  },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = { id: Date.now(), ...body };
  products.push(newProduct);
  return Response.json(newProduct);
}
