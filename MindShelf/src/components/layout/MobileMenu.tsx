import { NavLink } from "react-router";
import { NAV_LINKS } from "../../lib/constants";
import { SocialLinks } from "./SocialLinks";

export interface MobileMenuProps {
  isOpen: boolean;
  onNavigate: () => void;
}

export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className="border-t border-gray-200 bg-white md:hidden"
    >
      <nav
        aria-label="Mobile"
        className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6"
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              isActive
                ? "flex min-h-12 items-center rounded-lg bg-brand-50 px-4 text-base font-semibold text-brand-700"
                : "flex min-h-12 items-center rounded-lg px-4 text-base font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-brand-700"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="mx-auto max-w-7xl border-t border-gray-100 px-4 py-3 sm:px-6">
        <SocialLinks />
      </div>
    </div>
  );
}
