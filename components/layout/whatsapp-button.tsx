"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/8616605728983"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NexusTrade on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span className="pl-3 pr-1 py-3 hidden sm:block">
        <MessageCircle className="w-5 h-5" />
      </span>
      <span className="text-sm font-semibold pr-4 hidden sm:block leading-none">
        Chat with us
      </span>
      {/* Mobile: icon only */}
      <span className="sm:hidden p-4">
        <MessageCircle className="w-6 h-6" />
      </span>
    </a>
  );
}
