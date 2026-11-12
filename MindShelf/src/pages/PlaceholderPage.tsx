interface PlaceholderPageProps {
  title: string;
}

// Temporary page for routes we have not built yet. Deleted in Part 13.
export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      <p className="mt-3 text-gray-600">This page is coming soon.</p>
    </section>
  );
}
