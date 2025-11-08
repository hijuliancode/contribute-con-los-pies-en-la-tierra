export interface Event {
  id: string;
  title: string;
  dates: { start: string; end: string };
  location: string;
  images: string[];
  description?: string;
  status: 'past' | 'upcoming';
  whatsappMessage: string;
  mapUrl?: string;
  mapEmbedUrl?: string;
}

export const events: Event[] = [
  {
    id: 'campamento-sibate-2025',
    title: '2do Campamento de Fútbol Sibaté 2025',
    dates: { start: '2025-11-25', end: '2025-11-27' },
    location: 'Centro Recreativo Los Sauces, Sibaté, Cundinamarca',
    images: [
      '/images/events/evento-01.jpeg',
      '/images/events/evento-02.jpeg',
      '/images/events/evento-03.jpeg',
      '/images/events/evento-07.jpeg',
    ],
    description: 'Segundo campamento deportivo en Sibaté con entrenamiento profesional para jóvenes futbolistas.',
    status: 'upcoming',
    whatsappMessage: 'Hola, me interesa inscribirme en el 2do Campamento de Fútbol Sibaté 2025. ¿Podrían darme más información?',
    mapUrl: 'https://goo.gl/maps/6Q4Z5Y2K2Q7t7JZz6',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.3050593605208!2d-74.24509992523575!3d4.524046995450391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f0aecdca910e7%3A0x66e3f66ab492f1a3!2sCentro%20Recreativo%20Los%20Sauces!5e1!3m2!1ses-419!2sco!4v1730993066425!5m2!1ses-419!2sco',
  },
  {
    id: 'samaria-cup-2025',
    title: 'Samaria Cup 2025',
    dates: { start: '2025-12-09', end: '2025-12-13' },
    location: 'Santa Marta, Magdalena',
    images: [
      '/images/events/evento-04.jpeg',
      '/images/events/evento-05.jpeg',
      '/images/events/evento-06.jpeg',
    ],
    description: 'Torneo de fútbol en Santa Marta. Una experiencia única para jóvenes futbolistas.',
    status: 'upcoming',
    whatsappMessage: 'Hola, me interesa participar en la Samaria Cup 2025. ¿Podrían darme más información sobre inscripciones?',
  },
  {
    id: 'campamento-sibate-2024',
    title: '1er Campamento Deportivo Sibaté 2024',
    dates: { start: '2024-11-26', end: '2024-11-28' },
    location: 'Centro Recreativo Los Sauces, Sibaté, Cundinamarca',
    images: [],
    description: 'Primer campamento deportivo realizado en Sibaté, Cundinamarca.',
    status: 'past',
    whatsappMessage: 'Hola, me interesa conocer más sobre los eventos de Con Los Pies En La Tierra.',
    mapUrl: 'https://goo.gl/maps/6Q4Z5Y2K2Q7t7JZz6',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.3050593605208!2d-74.24509992523575!3d4.524046995450391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f0aecdca910e7%3A0x66e3f66ab492f1a3!2sCentro%20Recreativo%20Los%20Sauces!5e1!3m2!1ses-419!2sco!4v1730993066425!5m2!1ses-419!2sco',
  },
  {
    id: 'samaria-cup-2024',
    title: 'Samaria Cup 2024',
    dates: { start: '2024-12-10', end: '2024-12-13' },
    location: 'Santa Marta, Magdalena',
    images: [
      '/images/samaria-cup.jpg',
    ],
    description: 'Primera edición de la Samaria Cup en Santa Marta. Torneo de fútbol que reunió a jóvenes talentos del país.',
    status: 'past',
    whatsappMessage: 'Hola, me interesa conocer más sobre los eventos de Con Los Pies En La Tierra.',
  },
];

export const upcomingEvents = events.filter(event => event.status === 'upcoming');
export const pastEvents = events.filter(event => event.status === 'past');
export const nextEvent = upcomingEvents[0] || null;

