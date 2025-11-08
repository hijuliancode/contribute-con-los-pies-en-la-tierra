"use client";

import { useState } from "react";
import CountdownCamp from "@/components/cowntdown-camp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Phone,
  Trophy,
  Users,
  Shirt,
  Droplet,
  Coffee,
  Bus,
  MessageCircle,
  Award,
  ArrowRight,
  Facebook,
  Heart,
  Target,
  Sparkles,
  FacebookIcon,
  Instagram,
  Star,
} from "lucide-react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { EventDetail } from "@/components/event-detail";
import { events, upcomingEvents, pastEvents } from "@/lib/events";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(
    null
  );

  return (
    <main className="min-h-screen">
      {/* Floating WhatsApp button */}
      <WhatsAppButton variant="floating" />

      {/* Hero Section - Rediseñado */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070"
            alt="Fútbol background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Logo Container */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center border-4 border-white/30 shadow-2xl">
              <Image
                src="/images/logo-con-los-pies-en-la-tierra.png"
                alt="Logo Con Los Pies En La Tierra"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-white">
            Con Los Pies En La Tierra
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-gray-100 font-light">
              Construimos procesos con jóvenes a través del arte, la cultura y
              el deporte.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-200">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Heart className="w-5 h-5 text-emerald-400" />
                <span>Transformamos vidas con propósito</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Trophy className="w-5 h-5 text-emerald-400" />
                <span>Organizadores de la SAMARIA CUP</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Sin ánimo de lucro, con ganas de cambiar el mundo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <CountdownCamp />
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full mb-4">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Noticia Destacada</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ⚽️ ¡LO LOGRAMOS! 🔥 SOMOS CAMPEONES 💪🏽
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="p-6 md:p-8">
                <p className="text-lg text-gray-700 mb-4">
                  Cumplimos nuestros primeros objetivos y hoy podemos decir con
                  orgullo que jugaremos la{" "}
                  <strong>Final Nacional del Baby Fútbol</strong>. 🏆💪
                </p>

                <p className="text-base text-gray-600 mb-4">
                  Gracias a quienes hicieron esto posible:{" "}
                  <strong>
                    MARSELLA, NEW STAR, SÓCRATES, TALENTOS, ÁGUILAS y LIBERTAD
                  </strong>
                  .
                </p>

                <p className="text-base text-gray-600 mb-6 italic">
                  Cuando las alianzas se construyen desde la lealtad y la
                  transparencia, funcionan. 🤝
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-emerald-900">
                    Somos <strong>ALIANZA MARSELLA SOACHA</strong>.
                  </p>
                  <p className="text-emerald-800 mt-2">
                    Ahora vamos a representar al municipio de Soacha en la{" "}
                    <strong>Final Nacional Medellín 2026</strong>.
                  </p>
                </div>

                <p className="text-lg font-semibold text-gray-800 mb-6">
                  🔥 Les presentamos a los 17 mejores jugadores de Cundinamarca.
                </p>

                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "/images/news/baby-futbol/564585499_1107113471631370_147288204575738833_n.jpg",
                    "/images/news/baby-futbol/564600646_1107114188297965_6011949279701018082_n.jpg",
                    "/images/news/baby-futbol/564607435_1107113631631354_381716788781159319_n.jpg",
                    "/images/news/baby-futbol/564771855_1107113941631323_5573119886688723221_n.jpg",
                    "/images/news/baby-futbol/564802364_1107112774964773_3810237241128758118_n.jpg",
                    "/images/news/baby-futbol/565114323_1107113704964680_5925074714584316100_n.jpg",
                    "/images/news/baby-futbol/565114474_1107113621631355_3158257278096387937_n.jpg",
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`Alianza Marsella Soacha - Imagen ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Próximos Eventos
              </h2>
              <p className="text-xl text-gray-600">
                No te pierdas nuestras próximas actividades
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Eventos Pasados
              </h2>
              <p className="text-xl text-gray-600">
                Nuestra trayectoria y logros
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">
            Nuestra Misión
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Target className="w-10 h-10 text-emerald-600" />}
              title="Arte, Cultura y Deporte"
              description="Construimos procesos integrales que desarrollan el potencial de los jóvenes"
            />
            <FeatureCard
              icon={<Heart className="w-10 h-10 text-emerald-600" />}
              title="Transformación Social"
              description="Trabajamos con propósito para cambiar vidas y comunidades"
            />
            <FeatureCard
              icon={<Trophy className="w-10 h-10 text-emerald-600" />}
              title="Excelencia Deportiva"
              description="Organizamos eventos de alto nivel como la SAMARIA CUP"
            />
          </div>
        </div>
        {/* Frase destacada */}
        <div className="max-w-3xl mx-auto">
          <div className="px-6 py-4">
            <p className="text-lg md:text-xl text-gray-800 font-semibold italic text-center">
              &ldquo;Si las drogas te elevan, el deporte te pone los pies en la
              tierra&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Información de Contacto</h2>
          <div className="flex flex-col gap-4 items-center justify-center max-w-md mx-auto">
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm w-full">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>3105878681 - 3228463651 - 3008842557</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm w-full">
              <Facebook className="w-5 h-5 text-emerald-600" />
              <a
                href="https://www.facebook.com/grantorneociudadverde"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors"
              >
                Con Los Pies En La Tierra en Facebook
              </a>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm w-full">
              <Instagram className="w-5 h-5 text-emerald-600" />
              <a
                href="https://www.instagram.com/deportes_conlospiesenlatierra/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors"
              >
                @deportes_conlospiesenlatierra
              </a>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm w-full">
              <svg
                className="w-5 h-5 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <a
                href="https://www.tiktok.com/@_conlospiesenlatierra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors"
              >
                @_conlospiesenlatierra
              </a>
            </div>
            <div className="pt-4">
              <WhatsAppButton variant="inline" className="text-lg px-6 py-3">
                Contáctanos por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Nuestros Patrocinadores
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Orgullosos de contar con el apoyo de marcas que confían en el
              desarrollo deportivo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Sponsor Card 1 */}
              <div className="group relative">
                <div className="relative p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <a
                      href="https://www.elevationsport.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/logos/logo-elevationsport-brand.svg"
                        alt="Elevation Sport"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sponsor Card 2 */}
              <div className="group relative">
                <div className="relative p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <a
                      href="https://www.kunnat.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/logos/kunnat-logo.png"
                        alt="Kunnat"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sponsor Card 3 */}
              <div className="group relative">
                <div className="relative p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <a
                      href="https://inred.com.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/logos/inred-logo.png"
                        alt="Inred"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sponsor Card 4 - Electrolit */}
              <div className="group relative">
                <div className="relative p-4 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/logos/logo-electrolit.png"
                      alt="Electrolit"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Social Media Links */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/grantorneociudadverde"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="hover:text-emerald-400 transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/deportes_conlospiesenlatierra/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@_conlospiesenlatierra"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="hover:text-emerald-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>
              Página hecha por{" "}
              <a
                href="https://elevationsport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3E88FF] hover:text-emerald-400 transition-colors"
              >
                elevationsport.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetail
          event={selectedEvent}
          open={!!selectedEvent}
          onOpenChange={(open) => !open && setSelectedEvent(null)}
        />
      )}
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface EventCardProps {
  event: (typeof events)[0];
  onClick: () => void;
}

function EventCard({ event, onClick }: EventCardProps) {
  const startDate = new Date(event.dates.start);
  const endDate = new Date(event.dates.end);

  // Formatear fechas en español manualmente
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const formattedDate = `${startDate.getDate()} de ${
    months[startDate.getMonth()]
  }`;
  const formattedEndDate = `${endDate.getDate()} de ${
    months[endDate.getMonth()]
  } ${endDate.getFullYear()}`;

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        {event.images.length > 0 ? (
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
            <Trophy className="w-16 h-16 text-white opacity-50" />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge
            variant={event.status === "upcoming" ? "default" : "secondary"}
          >
            {event.status === "upcoming" ? "Próximo" : "Pasado"}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <CardDescription className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {formattedDate} - {formattedEndDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {event.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {event.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Más información
        </Button>
        <a
          href={`https://wa.me/573105878681?text=${encodeURIComponent(
            event.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Inscribirme
        </a>
      </CardFooter>
    </Card>
  );
}
