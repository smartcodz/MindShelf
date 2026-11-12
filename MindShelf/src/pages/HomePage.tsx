import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { FeaturesStrip } from "../components/home/FeaturesStrip";
import { Hero } from "../components/home/Hero";

// A page only assembles sections. More sections arrive in the next steps.
export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <FeaturedProducts />
    </>
  );
}
