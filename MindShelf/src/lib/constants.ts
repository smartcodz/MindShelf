import type { Category } from "../types/product";
import type {
  BankDetails,
  FooterLinkGroup,
  NavLink,
  SiteInfo,
  SocialLink,
} from "../types/site";

// PLACEHOLDERS: replace with your real details before launch.
export const SITE: SiteInfo = {
  name: "MindShelf",
  tagline: "Books and learning for your money, marriage and growth.",
  currency: "₦",
  whatsappNumber: "234XXXXXXXXXX",
  supportEmail: "hello@mindshelf.example",
};

export const BANK_DETAILS: BankDetails = {
  bankName: "Your Bank Name",
  accountName: "MindShelf",
  accountNumber: "0000000000",
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: "instagram",
    label: "MindShelf on Instagram",
    href: "https://instagram.com/yourhandle",
  },
  {
    platform: "facebook",
    label: "MindShelf on Facebook",
    href: "https://facebook.com/yourpage",
  },
  {
    platform: "x",
    label: "MindShelf on X",
    href: "https://x.com/yourhandle",
  },
  {
    platform: "youtube",
    label: "MindShelf on YouTube",
    href: "https://youtube.com/@yourchannel",
  },
  {
    platform: "tiktok",
    label: "MindShelf on TikTok",
    href: "https://tiktok.com/@yourhandle",
  },
];

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Books", to: "/products" },
  { label: "Events", to: "/events" },
];

export const CATEGORIES: readonly Category[] = [
  "Christian Books",
  "Leadership",
  "Finance",
  "Marriage",
  "Self-Development",
];

export const WHATSAPP_CHAT_URL = `https://wa.me/${SITE.whatsappNumber}`;

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    title: "Shop",
    links: [
      { label: "All books", href: "/products" },
      { label: "Your cart", href: "/cart" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Chat on WhatsApp", href: WHATSAPP_CHAT_URL, isExternal: true },
      {
        label: "Email us",
        href: `mailto:${SITE.supportEmail}`,
        isExternal: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our events", href: "/events" },
      { label: "Log in", href: "/login" },
      { label: "Create account", href: "/register" },
    ],
  },
];
