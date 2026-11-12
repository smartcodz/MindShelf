import { BookOpen } from "lucide-react";
import { Link } from "react-router";

const primaryLink =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-600 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700";

const secondaryLink =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-800 transition-colors duration-200 hover:border-brand-300 hover:text-brand-700";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-4 py-16 sm:px-6 sm:py-24">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <BookOpen className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-3xl font-semibold text-gray-900 sm:text-4xl">
        We could not find that page
      </h1>
      <p className="mt-3 max-w-prose text-gray-600">
        The address may have a typing mistake, or the page may have moved. Check
        the link, or go to our books.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/products" className={primaryLink}>
          Browse books
        </Link>
        <Link to="/" className={secondaryLink}>
          Go to home
        </Link>
      </div>
    </section>
  );
}
