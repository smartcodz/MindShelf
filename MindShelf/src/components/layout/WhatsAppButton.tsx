import { MessageCircle } from "lucide-react";
import { WHATSAPP_CHAT_URL } from "../../lib/constants";

const GREETING = "Hello MindShelf, I would like to ask about your books.";

// encodeURIComponent turns spaces and symbols into a safe form for a web address.
const chatLink = `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(GREETING)}`;

export function WhatsAppButton() {
  return (
    <a
      href={chatLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (opens in a new tab)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 inline-flex h-14 min-w-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-gray-900 shadow-lg transition-colors duration-200 hover:bg-whatsapp-dark print:hidden"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
