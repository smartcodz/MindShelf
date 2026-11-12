import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FOOTER_LINK_GROUPS, SITE } from "../../lib/constants";
import { SocialLinks } from "./SocialLinks";

const linkStyles =
  "inline-flex min-h-11 items-center text-sm text-gray-600 transition-colors duration-200 hover:text-brand-700 hover:underline";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-brand-600 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex rounded-lg">
              <img src={logo} alt="MindShelf logo" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-600">
              {SITE.tagline}
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-sans text-sm font-semibold text-gray-900">
                {group.title}
              </h2>
              <ul className="mt-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className={linkStyles}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className={linkStyles}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p>Pay by bank transfer. We confirm your order on WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
