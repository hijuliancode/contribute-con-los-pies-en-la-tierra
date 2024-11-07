interface MapWithAddressProps {
  direccion: string;
  latitude: number;
  longitude: number;
}

const MapWithAddress = ({ direccion, latitude, longitude }: MapWithAddressProps) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const iframeSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${latitude},${longitude}`;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{direccion}</h2>
    
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <iframe
          src={iframeSrc}
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: '0', borderRadius: '8px' }}
          aria-hidden="false"
        />
      </div>

      <div>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapWithAddress;
