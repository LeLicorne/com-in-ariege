/* eslint-disable @typescript-eslint/no-unused-vars */
import GoogleMap from 'google-maps-react-markers';

const FaLocationDot = (options: { lat: number; lng: number }) => {
  const { lat, lng } = options;
  return (
    <svg
      id={`${lat + lng}`}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 384 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black text-4xl"
    >
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
  );
};

export default function SimpleMap() {
  const location = {
    lat: 43.043723218293046,
    lng: 1.630084973108651,
    zoom: 11,
  };

  return (
    <div className="h-[50vw] sm:h-[40vw] md:h-[30vw] xl:h-[20vw]">
      <GoogleMap
        apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        defaultCenter={{ lat: location.lat, lng: location.lng }}
        defaultZoom={location.zoom}
      >
        <FaLocationDot lat={location.lat} lng={location.lng} />
      </GoogleMap>
    </div>
  );
}
