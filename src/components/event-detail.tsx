"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EventGallery } from "./event-gallery";
import { WhatsAppButton } from "./whatsapp-button";
import { Event } from "@/lib/events";

interface EventDetailProps {
  event: Event;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventDetail({ event, open, onOpenChange }: EventDetailProps) {
  const startDate = new Date(event.dates.start);
  const endDate = new Date(event.dates.end);
  
  // Formatear fechas en español manualmente
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const formattedStartDate = `${startDate.getDate()} de ${months[startDate.getMonth()]}`;
  const formattedEndDate = `${endDate.getDate()} de ${months[endDate.getMonth()]} ${endDate.getFullYear()}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
          <DialogDescription className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span>
                {formattedStartDate} - {formattedEndDate}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {event.images.length > 0 && (
            <div className="relative">
              <EventGallery images={event.images} eventTitle={event.title} />
            </div>
          )}

          {event.description && (
            <div>
              <h3 className="font-semibold mb-2">Descripción</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          )}

          {event.mapEmbedUrl && (
            <div>
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={event.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {event.mapUrl && (
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Ver en Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          )}

          <div className="flex justify-center pt-4">
            <WhatsAppButton
              message={event.whatsappMessage}
              variant="inline"
              className="text-lg px-6 py-3"
            >
              Inscribirme por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

