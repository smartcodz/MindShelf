import { Outlet, ScrollRestoration } from "react-router";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { WhatsAppButton } from "../components/layout/WhatsAppButton";

export function MainLayout() {
  // Placeholder until the cart exists in Part 10.
  const cartCount = 0;

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar cartCount={cartCount} />

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 focus:outline-none"
      >
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollRestoration />
    </div>
  );
}
