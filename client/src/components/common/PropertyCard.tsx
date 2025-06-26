import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '@/ts-types/propertyTypes';
import { SquareFootIcon, BedIcon, BathIcon } from '@/components/icons/Index';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const propertyLink = `/properties/${property.id}`;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:transform">
      <Link to={propertyLink} className="relative block">
        <img
          src={property.featuredImage}
          alt={property.title}
          className="h-[240px] w-full object-cover"
          loading="lazy"
        />
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-medium ${
            property.category === 'For Sale'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {property.category}
        </span>
      </Link>

      <div className="p-6">
        <p className="mb-2 text-2xl font-bold text-gray-900">{property.price}</p>

        <Link
          to={propertyLink}
          className="mb-4 block text-lg font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"
        >
          {property.title}
        </Link>

        <p className="mb-4 text-sm text-gray-600">{property.location}</p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <SquareFootIcon />
            <span>{property.squareFeet.toLocaleString()} sq. ft.</span>
          </div>

          <div className="flex items-center space-x-1">
            <BedIcon />
            <span>{property.bedrooms} Bed</span>
          </div>

          <div className="flex items-center space-x-1">
            <BathIcon />
            <span>{property.bathrooms} Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
