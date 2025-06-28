import GoogleMap from '@/components/map/GoogleMap';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Property } from '@/ts-types/propertyTypes';

const PropertyLocation = ({ property }: { property: Property }) => {
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
        <div className="text-left">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Location
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Location <span className="font-medium">Map</span>
          </h1>
        </div>

        <Button
          variant="unstyled"
          size="unstyled"
          onClick={openDirections}
          className="flex items-center space-x-3 rounded-sm bg-gray-900 px-6 py-4 font-medium whitespace-nowrap text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
        >
          <p className="text-white">Get Directions</p>
          <ArrowRight className="h-[15px] w-[20px] text-white" />
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
