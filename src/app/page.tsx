"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, Mail, Bus, Trophy, Users, Shirt, Droplet, Coffee, Bus as BusIcon, MessageCircle, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
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
                src="/images/logo-1000x1000.png"
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
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Sibaté, Cundinamarca</p>
          <div className="flex items-center gap-4 text-lg mb-8 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm">
            <Calendar className="w-6 h-6" />
            <span>26 - 28 Noviembre 2024</span>
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
          </div>
        </div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative p-6 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=60"
                      alt="Sponsor 1"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">Patrocinador Platinum</h3>
                </div>
              </div>

              {/* Sponsor Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
                <div className="relative p-6 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60"
                      alt="Sponsor 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">Patrocinador Gold</h3>
                </div>
              </div>

              {/* Sponsor Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative p-6 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition-all">
                  <div className="aspect-[4/3] relative mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=800&auto=format&fit=crop&q=60"
                      alt="Sponsor 3"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center">Patrocinador Silver</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Página hecha por <a href="https://elevationsports.app" className="text-red-500 hover:text-red-400 transition-colors">elevationsports.app</a></p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({ title, icon }) {
  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}