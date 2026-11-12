import { Link } from "react-router";

// One book standing on the shelf. These are decorative, so the data is local.
interface ShelfBook {
  id: number;
  image: string;
  sizeClass: string; // width classes, so each book has a different height
  extraClass?: string; // optional extra look, like leaning
}

const SHELF_BOOKS: readonly ShelfBook[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/mindshelf-hero-1/300/450",
    sizeClass: "w-14 sm:w-20 lg:w-24",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/mindshelf-hero-2/300/450",
    sizeClass: "w-12 sm:w-[4.5rem] lg:w-[5.5rem]",
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/mindshelf-hero-3/300/450",
    sizeClass: "w-16 sm:w-24 lg:w-28",
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/mindshelf-hero-4/300/450",
    sizeClass: "w-12 sm:w-20 lg:w-24",
  },
  {
    id: 5,
    image: "https://picsum.photos/seed/mindshelf-hero-5/300/450",
    sizeClass: "w-14 sm:w-20 lg:w-24",
    extraClass: "-rotate-[9deg] origin-bottom-right",
  },
];

const primaryLink =
  "inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-700";

const secondaryLink =
  "inline-flex min-h-12 items-center justify-center rounded-lg border border-brand-600 bg-white px-6 text-base font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-50";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-brand-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div className="motion-safe:animate-hero-reveal">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Books for your money, marriage and growth
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Browse our books, pay by bank transfer and confirm your order on
            WhatsApp. We also run seminars and trainings.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className={primaryLink}>
              Shop books
            </Link>
            <Link to="/events" className={secondaryLink}>
              See events
            </Link>
          </div>
        </div>

        {/* Decorative shelf: hidden from screen readers. */}
        <div
          aria-hidden="true"
          className="motion-safe:animate-hero-reveal motion-safe:[animation-delay:150ms]"
        >
          <div className="flex items-end justify-center gap-2 sm:gap-3">
            {SHELF_BOOKS.map((book) => (
              <img
                key={book.id}
                src={book.image}
                alt=""
                width={300}
                height={450}
                decoding="async"
                className={`aspect-[2/3] h-auto rounded-l-sm rounded-r-md bg-brand-100 object-cover shadow-md ${book.sizeClass} ${book.extraClass ?? ""}`}
              />
            ))}
          </div>
          <div className="mt-0 h-1.5 w-full rounded-full bg-brand-300" />
        </div>
      </div>
    </section>
  );
}
