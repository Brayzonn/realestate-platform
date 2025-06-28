import GoogleMap from '@/components/map/GoogleMap';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const OfficeLocationMap = () => {
  const openDirections = () => {
    const lat = parseFloat(import.meta.env.VITE_OFFICE_LAT);
    const lng = parseFloat(import.meta.env.VITE_OFFICE_LNG);
    const destination = `${lat},${lng}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&destination_place_id=${encodeURIComponent('Abuja, Nigeria')}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="flex w-full flex-col space-y-16 py-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="text-left">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Office Location
            </span>
          </div>

          <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
            Office Location <span className="font-medium">Map</span>
          </h1>
        </div>

        <Button
          variant="unstyled"
          size="unstyled"
          onClick={openDirections}
          className="flex items-center space-x-3 rounded-sm bg-gray-900 px-6 py-4 font-medium whitespace-nowrap text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
        >
          <span>Get Directions</span>
          <ArrowRight className="h-[15px] w-[20px]" />
        </Button>
      </div>

      <div className="w-full overflow-hidden rounded-sm border border-gray-200/60 shadow-sm">
        <GoogleMap
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          center={{
            lat: parseFloat(import.meta.env.VITE_OFFICE_LAT),
            lng: parseFloat(import.meta.env.VITE_OFFICE_LNG),
          }}
          zoom={16}
        />
      </div>
    </section>
  );
};

export default OfficeLocationMap;
