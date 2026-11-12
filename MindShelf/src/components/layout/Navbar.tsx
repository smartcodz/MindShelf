import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { NAV_LINKS } from "../../lib/constants";
import { MobileMenu } from "./MobileMenu";
import { SocialLinks } from "./SocialLinks";

export interface NavbarProps {
  cartCount: number;
}

const iconButtonStyles =
  "relative inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700";

export function Navbar({ cartCount }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const cartLabel =
    cartCount === 0
      ? "Your cart is empty"
      : `Your cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`;

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="inline-flex shrink-0 rounded-lg"
        >
          <img src={logo} alt="MindShelf logo" className="h-9 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex min-h-11 items-center rounded-lg bg-brand-50 px-4 text-sm font-semibold text-brand-700"
                      : "inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-brand-700"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <div className="mr-1 hidden border-r border-gray-200 pr-2 lg:block">
            <SocialLinks />
          </div>

          <Link to="/cart" aria-label={cartLabel} className={iconButtonStyles}>
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`${iconButtonStyles} md:hidden`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onNavigate={closeMenu} />
    </header>
  );
}
