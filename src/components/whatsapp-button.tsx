"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  className?: string;
  variant?: "default" | "floating" | "inline";
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message = "Hola, me interesa conocer más sobre los eventos de Con Los Pies En La Tierra.",
  phoneNumber = "573105878681",
  className,
  variant = "default",
  children,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Escríbenos a WhatsApp"
        className={cn(
          "fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105",
          className
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors",
          className
        )}
      >
        <MessageCircle className="w-5 h-5" />
        {children || "Contactar por WhatsApp"}
      </a>
    );
  }

  return (
    <Button
      asChild
      className={cn("bg-green-500 hover:bg-green-600", className)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {children || "Contactar por WhatsApp"}
      </a>
    </Button>
  );
}

