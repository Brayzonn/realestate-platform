import GoogleMap from '@/components/map/GoogleMap';
import arrowRight from '@/assets/images/arrowright.svg';
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
    <section className="flex w-full flex-col space-y-[2rem] py-[4rem]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="flex w-full items-center gap-4 text-[27px] font-[900] uppercase md:text-[36px]">
          Office Location Map
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

      <section className="w-full overflow-hidden rounded-lg shadow-lg">
        <GoogleMap
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          center={{
            lat: parseFloat(import.meta.env.VITE_OFFICE_LAT),
            lng: parseFloat(import.meta.env.VITE_OFFICE_LNG),
          }}
          zoom={16}
        />
      </section>
    </section>
  );
};

export default OfficeLocationMap;
