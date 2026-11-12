import { Star } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "../../types/product";

// TEMPORARY sample data. In Part 3, Step 5 we replace this with real data.
const SAMPLE_PRODUCTS: readonly Product[] = [
  {
    id: 1,
    name: "The Quiet Ledger",
    price: 8500,
    category: "Finance",
    image: "https://picsum.photos/seed/mindshelf-book-1/400/600",
    description: "A calm, practical guide to tracking every naira you earn.",
    rating: 4.7,
    stock: 14,
  },
  {
    id: 2,
    name: "Morning by Morning",
    price: 6500,
    category: "Christian Books",
    image: "https://picsum.photos/seed/mindshelf-book-2/400/600",
    description: "Short daily readings to start your day with faith and focus.",
    rating: 4.9,
    stock: 22,
  },
  {
    id: 3,
    name: "Lead From the Second Row",
    price: 11000,
    category: "Leadership",
    image: "https://picsum.photos/seed/mindshelf-book-3/400/600",
    description: "How to lead well before anyone gives you the title.",
    rating: 4.4,
    stock: 2,
  },
  {
    id: 4,
    name: "Two Hearts, One Budget",
    price: 9000,
    category: "Marriage",
    image: "https://picsum.photos/seed/mindshelf-book-4/400/600",
    description: "Talk about money with your spouse without the quarrels.",
    rating: 4.6,
    stock: 11,
  },
];

// TEMPORARY helper. The shared formatPrice arrives in Part 3, Step 2.
const nairaFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export function FeaturedProducts() {
  return (
    <section aria-labelledby="featured-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="featured-heading"
              className="text-2xl font-semibold text-gray-900 sm:text-3xl"
            >
              Popular books
            </h2>
            <p className="mt-1 text-gray-600">A few good places to start.</p>
          </div>
          <Link
            to="/products"
            className="inline-flex min-h-11 items-center font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800 hover:underline"
          >
            View all books
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {SAMPLE_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Link
                to={`/products/${product.id}`}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-3 transition-shadow duration-200 hover:shadow-md sm:p-4"
              >
                <img
                  src={product.image}
                  alt={`Cover of ${product.name}`}
                  width={400}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[2/3] w-full rounded-lg bg-brand-50 object-cover"
                />
                <p className="mt-3 text-xs font-medium text-brand-700">
                  {product.category}
                </p>
                <h3 className="mt-1 line-clamp-2 font-sans text-base font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                  <Star
                    className="h-4 w-4 fill-current text-amber-500"
                    aria-hidden="true"
                  />
                  <span aria-hidden="true">{product.rating.toFixed(1)}</span>
                  <span className="sr-only">
                    Rated {product.rating.toFixed(1)} out of 5
                  </span>
                </p>
                <div className="mt-auto pt-3">
                  <p className="font-semibold text-gray-900">
                    {nairaFormatter.format(product.price)}
                  </p>
                  {product.stock <= 3 && (
                    <p className="text-sm text-amber-700">
                      Only {product.stock} left
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
