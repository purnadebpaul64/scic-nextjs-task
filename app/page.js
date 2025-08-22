import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductHighlights />
      <Footer />
    </div>
  );
}
