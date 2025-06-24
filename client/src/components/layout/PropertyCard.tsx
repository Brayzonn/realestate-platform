import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '@/ts-types/property';
import { SquareFootIcon, BedIcon, BathIcon } from '@/components/icons/Index';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {

  const propertyLink = `/properties/${property.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
        <Link to={propertyLink} className="relative block">
          <img 
              src={property.featuredImage}
              alt={property.title}
              className="w-full h-[240px] object-cover"
              loading="lazy"
          />
          <span className={`absolute top-4 left-4 px-3 py-1 text-sm font-medium rounded-full ${
              property.category === 'For Sale'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
              {property.category}
          </span>
        </Link>
      
        <div className="p-6">
            <p className="text-2xl font-bold text-gray-900 mb-2">{property.price}</p>
            
            <Link 
                to={propertyLink}
                className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-200 block mb-4"
            >
                {property.title}
            </Link>
            
            <p className="text-gray-600 mb-4 text-sm">{property.location}</p>
            
            <div className="flex justify-between items-center text-sm text-gray-600">
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