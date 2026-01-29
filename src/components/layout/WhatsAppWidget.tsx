import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919532398715';
  const message = 'Hello! I am interested in your services. Please provide more information.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      <div
        className={`absolute bottom-20 right-0 w-80 bg-background rounded-2xl shadow-hover border border-border transition-all duration-300 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="gradient-primary text-primary-foreground p-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">IT World International</h4>
              <p className="text-xs text-primary-foreground/80">Typically replies within minutes</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 bg-muted/50">
          <div className="bg-background rounded-xl p-3 shadow-sm">
            <p className="text-sm text-foreground">
              👋 Hi there! How can we help you today? Click the button below to start a conversation.
            </p>
            <span className="text-xs text-muted-foreground mt-1 block">Just now</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleWhatsAppClick}
            className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-hover flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-foreground text-background rotate-0'
            : 'bg-[#25D366] text-white animate-pulse-glow'
        }`}
        aria-label="Toggle WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};
