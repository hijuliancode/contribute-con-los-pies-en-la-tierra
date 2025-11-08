"use client";
import React, { useState, useEffect } from "react";
import { nextEvent } from "@/lib/events";

const CountdownCamp = () => {
  // Fecha de inicio del próximo evento (25 de noviembre de 2025)
  const targetDate = nextEvent
    ? new Date(`${nextEvent.dates.start}T00:00:00`)
    : null;

  // Estado para la cuenta regresiva y el mensaje
  const [timeLeft, setTimeLeft] = useState("");
  const [showEventMessage, setShowEventMessage] = useState(false);

  // Función para calcular el tiempo restante
  const updateCountdown = () => {
    if (!targetDate) {
      setTimeLeft("");
      return;
    }

    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    // Si ya pasó la fecha de inicio
    if (difference <= 0) {
      const endDate = nextEvent
        ? new Date(`${nextEvent.dates.end}T23:59:59`)
        : null;
      if (endDate && now <= endDate) {
        // Durante el evento
        setShowEventMessage(true);
        setTimeLeft("");
      } else {
        // Después del evento
        setShowEventMessage(false);
        setTimeLeft("");
      }
      return;
    }

    // Si aún no es la fecha del evento, calculamos el tiempo restante
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  // Actualizamos la cuenta regresiva cada segundo
  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!nextEvent) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">
          No hay eventos próximos programados
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      {timeLeft && !showEventMessage && (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Faltan {timeLeft}
          </h2>
          <p className="text-lg text-gray-600">Para el {nextEvent.title}</p>
        </>
      )}

      {showEventMessage && (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-600">
            ¡El evento ya está en curso!
          </h2>
          <p className="text-lg text-gray-600">
            {nextEvent.title} - {nextEvent.location}
          </p>
        </>
      )}

      {!timeLeft && !showEventMessage && (
        <p className="text-lg text-gray-600">
          Próximamente anunciaremos nuevos eventos
        </p>
      )}
    </div>
  );
};

export default CountdownCamp;
