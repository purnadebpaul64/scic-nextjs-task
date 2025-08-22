import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
