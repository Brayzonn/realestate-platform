import { propertiesData } from '@/store/data';
import { useParams, Navigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { formatNumber } from '@/utils';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertiesData.find((selectedProperty) => selectedProperty.id === id);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  return (
    <section className="flex w-full flex-col space-y-16">
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
            Property Details
          </span>
        </div>

        <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          {property.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed font-light text-gray-600">
          {property.description}
        </p>
      </div>

      <div className="max-w-lg rounded-sm border border-gray-200/60 bg-white p-8 shadow-sm">
        <h3 className="mb-8 text-xl font-medium text-gray-900">Property Information</h3>

        <div className="space-y-6">
          <div className="flex items-start justify-between border-b border-gray-100 pb-4">
            <span className="font-medium text-gray-600">Location</span>
            <span className="max-w-xs text-right font-light text-gray-900">
              {property.location}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-gray-100 pb-4">
            <span className="font-medium text-gray-600">Bedrooms</span>
            <span className="text-right font-light text-gray-900">
              {formatNumber(property.bedrooms)}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-gray-100 pb-4">
            <span className="font-medium text-gray-600">Bathrooms</span>
            <span className="text-right font-light text-gray-900">
              {formatNumber(property.bathrooms)}
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-gray-100 pb-4">
            <span className="font-medium text-gray-600">Area</span>
            <span className="text-right font-light text-gray-900">
              {property.squareFeet.toLocaleString()} <span className="text-gray-500">sq ft</span>
            </span>
          </div>

          <div className="rounded-sm border border-gray-200/60 bg-gray-50 p-6">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Price</span>
              <span className="text-2xl font-light text-gray-900">{property.price}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <Button
            variant="unstyled"
            size="unstyled"
            onClick={() => console.log('Make inquiry clicked')}
            className="flex w-full items-center justify-center gap-3 rounded-sm bg-gray-900 px-6 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
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
