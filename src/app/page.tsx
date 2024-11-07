"use client";

import CountdownCamp from "@/components/cowntdown-camp";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, Mail, Bus, Trophy, Users, Shirt, Droplet, Coffee, Bus as BusIcon, MessageCircle, Award, ArrowRight, WheatIcon, MessageCircleIcon, MessageCircleMoreIcon, FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Floating whatsapp button */}
      <a href="https://wa.me/573105878681?text=Hola%20te%20escribo%20desde%20conlospiesenlatierra.com%20..." title="Escribenos a whatsapp" className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105" target="_blank">
        <MessageCircleMoreIcon className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070"
            alt="Fútbol background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          {/* Logo Container */}
          <div className="mb-8">
            <div className="overflow-hidden w-48 h-48 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
              <span className="text-white text-sm text-center px-4">Logo Con Los Pies En La Tierra</span>
              <Image
                src="/images/logo-con-los-pies-en-la-tierra.png"
                alt="Fútbol background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Primer Campamento Deportivo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Centro Recreativo Los Sauces, Sibaté, Cundinamarca</p>
          <div className="flex items-center gap-4 text-lg mb-8 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
            <Calendar className="w-6 h-6" />
            <span>Del 26 al 28 de Noviembre 2024</span>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6 rounded-full transition-transform hover:scale-105 mb-3">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoLm5EARuZ1l-vdc-C7_QFb3Udci2rasa2MLVJDwWBleZKsg/viewform?usp=sf_link" target="_blank" title="Inscribete ahora">
              ¡Inscríbete Ahora!
            </a>
          </Button>
          {/* Button to download pdf information */}
          <Link href="/docs/campamento-deportivo-sibate-2024.pdf">
            <span className="mt-4 text-sm underline hover:no-underline">Descarga la información del campamento</span>
          </Link>
        </div>
      </div>

      {/* Countdown Section */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <CountdownCamp />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 pb-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Características del Programa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-10 h-10 text-red-600" />}
              title="Edades"
              description="Para niños y jóvenes de 6 a 16 años"
            />
            <FeatureCard
              icon={<Trophy className="w-10 h-10 text-red-600" />}
              title="Entrenadores Elite"
              description="Staff profesional de Independiente Santa Fe"
            />
            <FeatureCard
              icon={<Mail className="w-10 h-10 text-red-600" />}
              title="Entrenamiento Especializado"
              description="Trabajos específicos por posición y entrenador de arqueros"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Incluye</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard title="Uniforme Completo" icon={<Shirt className="w-6 h-6 text-red-600" />} />
            <BenefitCard title="Hidratación" icon={<Droplet className="w-6 h-6 text-red-600" />} />
            <BenefitCard title="Refrigerio y Almuerzo" icon={<Coffee className="w-6 h-6 text-red-600" />} />
            <BenefitCard title="Servicio de Ruta" icon={<BusIcon className="w-6 h-6 text-red-600" />} />
            <BenefitCard title="Charlas Motivacionales" icon={<MessageCircle className="w-6 h-6 text-red-600" />} />
            <BenefitCard title="Certificado de Participación" icon={<Award className="w-6 h-6 text-red-600" />} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Información de Contacto</h2>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm">
              <Phone className="w-5 h-5 text-red-600" />
              <span>3105878681 - 3228463651 - 3008842557</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Sibaté, Cundinamarca</span>
            </div>
            {/* add facebook link with icon */}
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm">
              <FacebookIcon className="w-5 h-5 text-red-600" />
              <span><a href="https://www.facebook.com/grantorneociudadverde" target="_blank">Con Los Pies En La Tierra en facebook</a></span>
            </div>

          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ubicación</h2>
          <p className="text-center text-gray-600 mb-12">Centro Recreativo Los Sauces, Sibaté, Cundinamarca</p>
          {/* Map Container */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.3050593605208!2d-74.24509992523575!3d4.524046995450391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f0aecdca910e7%3A0x66e3f66ab492f1a3!2sCentro%20Recreativo%20Los%20Sauces!5e1!3m2!1ses-419!2sco!4v1730993066425!5m2!1ses-419!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        <p>
          <a href="https://goo.gl/maps/6Q4Z5Y2K2Q7t7JZz6" target="_blank" className="block text-center mt-4 text-red-600 hover:text-red-500 transition-colors">
            Ver en Google Maps <ArrowRight className="w-4 h-4 inline-block" />
          </a>
        </p>
      </section>

      {/* Santa Marta Preview Section */}
      <section className="py-20 pb-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Próximamente en Santa Marta</h2>
            <div className="flex items-center justify-center gap-4 text-lg text-red-600 font-semibold">
              <Calendar className="w-6 h-6" />
              <span>10 - 13 Diciembre 2024</span>
            </div>
          </div>
          {/* Banner Container */}
          <div className="w-full max-w-5xl mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Image
                src="/images/samaria-cup.jpg"
                alt="Samaria Cup 2024"
                width={1024}
                height={384}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Nuestros Patrocinadores</h2>
            <p className="text-gray-600 text-center mb-12">Orgullosos de contar con el apoyo de marcas que confían en el desarrollo deportivo</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sponsor Card 1 */}
              <div className="group relative">
                <div className="relative p-2 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <a href="https://www.elevationsports.app/es" target="_blank">
                      <Image
                        src="/images/logos/elevation-sports-logo.png"
                        alt="Sponsor 1"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sponsor Card 2 */}
              <div className="group relative">
                <div className="relative p-2 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <a href="https://www.kunnat.co/" target="_blank">
                      <Image
                        src="/images/logos/kunnat-logo.png"
                        alt="Sponsor 2"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sponsor Card 3 */}
              <div className="group relative">
                <div className="relative p-2 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative">
                    <a href="https://inred.com.co/" target="_blank">
                      <Image
                        src="/images/logos/inred-logo.png"
                        alt="Sponsor 3"
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        {/* Social Media Links */}
        <div className="container mx-auto px-4 text-center mb-2">
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.facebook.com/grantorneociudadverde" target="_blank" title="Instagram">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <p>Página hecha por <a href="https://elevationsports.app" className="text-red-500 hover:text-red-400 transition-colors">elevationsports.app</a></p>
        </div>
      </footer>
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
    <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface BenefitCardProps {
  title: string;
  icon: React.ReactNode;
}

function BenefitCard({ title, icon }: BenefitCardProps) {
  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}