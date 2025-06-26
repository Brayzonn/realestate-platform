import { propertiesData } from '@/store/data';
import { useParams, Navigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

const PropertyDetails = () => {
  const formatNumber = (num: number) => {
    const numbers = [
      'Zero',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
    ];
    return numbers[num] || num.toString();
  };

  const { id } = useParams<{ id: string }>();
  const property = propertiesData.find((selectedProperty) => selectedProperty.id === id);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }
  return (
    <section className="flex w-full flex-col space-y-[2rem]">
      <div className="flex w-full flex-col space-y-[1rem]">
        <h1 className="w-full text-left text-[27px] font-[900] uppercase md:text-[36px]">
          {property.title}{' '}
        </h1>
        <p className="w-full">{property.description}</p>
      </div>

      <div className="relative max-w-[500px] rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="bg-alternativePastelYellow absolute top-0 left-0 h-[2px] w-16 rounded-full"></div>

        <div className="mb-8 space-y-6">
          <div className="flex items-start justify-between border-b border-gray-100 py-3">
            <span className="font-medium text-gray-600">Location</span>
            <span className="max-w-[300px] text-right font-medium text-gray-900">
              {property.location}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-gray-100 py-3">
            <span className="font-medium text-gray-600">Bedrooms</span>
            <span className="text-right font-medium text-gray-900">
              {formatNumber(property.bedrooms)}{' '}
              <span className="text-gray-500">({property.bedrooms})</span>
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-gray-100 py-3">
            <span className="font-medium text-gray-600">Bathrooms</span>
            <span className="text-right font-medium text-gray-900">
              {formatNumber(property.bathrooms)}{' '}
              <span className="text-gray-500">({property.bathrooms})</span>
            </span>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-600">Price</span>
              <span className="text-xl font-bold tracking-wide text-black">{property.price}</span>
            </div>
          </div>

          <div className="flex items-start justify-between py-3">
            <span className="font-medium text-gray-600">Area</span>
            <span className="text-right font-medium text-gray-900">
              {property.squareFeet.toLocaleString()} <span className="text-gray-500">sqft</span>
            </span>
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="unstyled"
            size="unstyled"
            onClick={() => console.log('rar')}
            className="hover:bg-alternativePastelYellow flex w-full items-center justify-center gap-3 rounded-lg bg-black px-6 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:text-black focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:outline-none"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Make Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
