'use client'
import React, { useState, useEffect } from 'react'

const CountdownCamp = () => {
  // Fecha de inicio (26 de noviembre de 2024)
  const targetDate = new Date('2024-11-26T00:00:00')

  // Estado para la cuenta regresiva y el mensaje
  const [timeLeft, setTimeLeft] = useState('')
  const [showCampMessage, setShowCampMessage] = useState(false)
  const [nextCampLocation, setNextCampLocation] = useState('')

  // Función para calcular el tiempo restante
  const updateCountdown = () => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    // Si ya pasó la fecha de inicio (26 de noviembre)
    if (difference <= 0) {
      const endDate = new Date('2024-11-28T23:59:59') // Fecha final de la visita al campamento
      if (now <= endDate) {
        // Entre el 26 y 28 de noviembre
        setShowCampMessage(true)
        setNextCampLocation('Santa Marta')
      } else {
        // Después del 28 de noviembre, cambiar al próximo campamento
        setNextCampLocation('Santa Marta')
        setShowCampMessage(false)
      }
      return
    }

    // Si aún no es la fecha del campamento, calculamos el tiempo restante
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
  }

  // Actualizamos la cuenta regresiva cada segundo
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Si la cuenta regresiva no ha llegado al 26 de noviembre */}

      {timeLeft && !showCampMessage && !nextCampLocation && (
        <>
          <h2 className='text-xl mb-4'>Faltan {timeLeft}</h2>
          <p className='text-lg'>Prepárate para la aventura, el campamento comienza el 26 de noviembre de 2024.</p>
        </>
      )}
      
      {/* Entre el 26 y 28 de noviembre, mostrar mensaje especial */}
      {showCampMessage && (
        <>
          <h2>¡Ya estamos en el campamento!</h2>
          <p>Visítanos en nuestro campamento del 26 al 28 de noviembre de 2024.</p>
          <a href="https://maps.google.com/?q=26.2014,-80.1918" target="_blank" rel="noopener noreferrer">
            Ver ubicación en Google Maps
          </a>
        </>
      )}
      
      {/* Después del 28 de noviembre, mostrar el próximo campamento */}
      {nextCampLocation && !showCampMessage && (
        <>
          <h2>Próximo campamento en: {nextCampLocation}</h2>
          <p>Nos vemos pronto en el campamento de {nextCampLocation}. ¡No faltes!</p>
        </>
      )}
    </div>
  )
}

export default CountdownCamp
