import { GraduationCap, Landmark, MessageCircle, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; // the icon component itself, not a drawn icon
}

const FEATURES: readonly Feature[] = [
  {
    id: "whatsapp-order",
    title: "Order on WhatsApp",
    description: "Pick your books and send your order in one tap.",
    icon: MessageCircle,
  },
  {
    id: "bank-transfer",
    title: "Pay by bank transfer",
    description: "Send the exact total to our account. No card needed.",
    icon: Landmark,
  },
  {
    id: "delivery",
    title: "Delivery arranged for you",
    description:
      "After we confirm your payment, we arrange delivery to your address.",
    icon: Truck,
  },
  {
    id: "events",
    title: "Learn with us",
    description:
      "Join seminars, trainings and workshops on money, marriage and growth.",
    icon: GraduationCap,
  },
];

export function FeaturesStrip() {
  return (
    <section
      aria-labelledby="features-heading"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <h2 id="features-heading" className="sr-only">
          How MindShelf works
        </h2>

        <ul className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-gray-200">
          {FEATURES.map((feature) => {
            // A component name must start with a capital letter to be used as a tag.
            const Icon = feature.icon;

            return (
              <li
                key={feature.id}
                className="flex items-start gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
