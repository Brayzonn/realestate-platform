import GoogleMap from '@/components/map/GoogleMap';
import Button from '@/components/ui/Button';
import arrowRight from '@/assets/images/arrowright.svg';
import { Property } from '@/ts-types/propertyTypes';

const PropertyLocation = (property: Property) => {
  const mapMarkers = [
    {
      position: property.coordinates,
      title: property.title,
      info: `
          <div style="max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold;">${property.title}</h3>
            <p style="margin: 0 0 8px 0; font-size: 14px;">${property.location}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${property.price}</p>
            <p style="margin: 0; font-size: 12px;">${property.bedrooms} Bedrooms • ${property.bathrooms} Bathrooms • ${property.squareFeet} sqft</p>
          </div>
        `,
    },
  ];

  const openDirections = () => {
    const destination = `${property.coordinates.lat},${property.coordinates.lng}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${encodeURIComponent(property.location)}`;
    window.open(googleMapsUrl, '_blank');
  };
  return (
    <section className="flex w-full flex-col space-y-[2rem] py-[1rem]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="flex w-full items-center gap-4 text-[27px] font-[900] uppercase md:text-[36px]">
          Location Map
          <span className="block h-[2px] w-[60px] bg-black"></span>
        </h1>

        <Button
          variant="unstyled"
          size="unstyled"
          onClick={openDirections}
          className="bg-alternativePastelYellow flex space-x-2 rounded-lg px-6 py-3 font-medium whitespace-nowrap text-black transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
        >
          <p>Get Directions</p>
          <img src={arrowRight} alt="arrowRight" />
        </Button>
      </div>

      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <GoogleMap
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          center={property.coordinates}
          zoom={16}
          markers={mapMarkers}
        />
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-700">
          <strong>Address:</strong> {property.location}
          <br />
          <strong>Coordinates:</strong> {property.coordinates.lat}, {property.coordinates.lng}
          <br />
        </p>
      </div>
    </section>
  );
};

export default PropertyLocation;
