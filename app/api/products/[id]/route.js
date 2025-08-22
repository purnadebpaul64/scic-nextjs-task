import { products } from "../route";

export async function GET(req, { params }) {
  const product = products.find((p) => p.id == params.id);
  if (!product) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return Response.json(product);
}
