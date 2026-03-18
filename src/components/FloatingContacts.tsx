import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export function FloatingContacts() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact options */}
      {open && (
        <div className="flex flex-col gap-2 items-end">
          <a
            href="tel:+74951234567"
            className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 shadow-lg border border-border hover:shadow-xl transition-all duration-200 group"
          >
            <span className="text-sm text-gray-700 group-hover:text-primary transition-colors hidden sm:block">
              +7 (495) 123-45-67
            </span>
            <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </div>
          </a>

          <a
            href="https://wa.me/74951234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 shadow-lg border border-border hover:shadow-xl transition-all duration-200 group"
          >
            <span className="text-sm text-gray-700 group-hover:text-green-600 transition-colors hidden sm:block">
              WhatsApp
            </span>
            <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
          </a>

          <a
            href="https://t.me/belleclinique"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 shadow-lg border border-border hover:shadow-xl transition-all duration-200 group"
          >
            <span className="text-sm text-gray-700 group-hover:text-blue-500 transition-colors hidden sm:block">
              Telegram
            </span>
            <div className="w-9 h-9 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-gray-700 hover:bg-gray-800 rotate-0'
            : 'bg-primary hover:bg-primary/90'
        }`}
        aria-label="Связаться с нами"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {!open && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap animate-bounce pointer-events-none">
          Написать нам
        </div>
      )}
    </div>
  );
}
