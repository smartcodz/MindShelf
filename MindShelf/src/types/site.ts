export interface SiteInfo {
  name: string;
  tagline: string;
  currency: string;
  whatsappNumber: string; // international format, no plus, no spaces
  supportEmail: string;
}

export interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "x"
  | "youtube"
  | "tiktok";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean; // true for links that leave our site
}

export interface FooterLinkGroup {
  title: string;
  links: readonly FooterLink[];
}