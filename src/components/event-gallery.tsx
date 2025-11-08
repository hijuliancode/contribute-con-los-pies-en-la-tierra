"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EventGalleryProps {
  images: string[];
  eventTitle: string;
}

export function EventGallery({ images, eventTitle }: EventGalleryProps) {
  if (images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Carousel className="w-full relative">
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${eventTitle} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious 
              className="!left-2 md:!left-4 !top-1/2 !-translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-lg border-0 h-10 w-10" 
            />
            <CarouselNext 
              className="!right-2 md:!right-4 !top-1/2 !-translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-lg border-0 h-10 w-10" 
            />
          </>
        )}
      </Carousel>
    </div>
  );
}

