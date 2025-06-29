import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '@/ts-types/propertyTypes';
import { SquareFootIcon, BedIcon, BathIcon } from '@/components/icons/index';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const propertyLink = `/properties/${property.id}`;

  return (
    <Link
      to={propertyLink}
      className="group block overflow-hidden rounded-sm border border-gray-200/60 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={property.featuredImage}
          alt={property.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Persistent dark overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hover overlay for additional effect */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>

        <span
          className={`absolute top-5 left-5 rounded-sm px-3 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm transition-all duration-300 ${
            property.category === 'For Sale'
              ? 'border border-white/20 bg-white/90 text-gray-800'
              : 'border border-white/20 bg-white/90 text-gray-800'
          }`}
        >
          {property.category}
        </span>
      </div>

      <div className="p-7">
        <p className="mb-3 text-2xl font-light tracking-tight text-gray-900">{property.price}</p>

        <h3 className="mb-3 line-clamp-2 text-lg leading-snug font-medium text-gray-800 transition-colors duration-200 group-hover:text-gray-600">
          {property.title}
        </h3>

        <p className="mb-6 text-sm font-light tracking-wide text-gray-500">{property.location}</p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-1.5 text-gray-600">
            <div className="text-gray-400">
              <SquareFootIcon />
            </div>
            <span className="text-sm font-light">{property.squareFeet.toLocaleString()}</span>
            <span className="text-xs text-gray-400">sq ft</span>
          </div>

          <div className="flex items-center space-x-1.5 text-gray-600">
            <div className="text-gray-400">
              <BedIcon />
            </div>
            <span className="text-sm font-light">{property.bedrooms}</span>
            <span className="text-xs text-gray-400">bed</span>
          </div>

          <div className="flex items-center space-x-1.5 text-gray-600">
            <div className="text-gray-400">
              <BathIcon />
            </div>
            <span className="text-sm font-light">{property.bathrooms}</span>
            <span className="text-xs text-gray-400">bath</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
