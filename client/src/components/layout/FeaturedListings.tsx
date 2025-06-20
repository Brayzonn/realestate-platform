import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '@/ts-types/property';
import PropertyCard from '@/components/ui/PropertyCard';




const FeaturedListings: React.FC = () => {
    const properties: Property[] = [
        {
        id: '1',
        title: 'Spacious 4-Bedroom Villa in Guzape, Abuja',
        price: '$1,405,000',
        category: 'For Sale',
        image: 'https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e58a826a4d429b1dad7cf_image%20(73).png',
        squareFeet: 2500,
        bedrooms: 3,
        bathrooms: 2,
        link: '/properties/spacious-4-bedroom-villa-in-jumeirah-dubai'
        },
        {
        id: '2',
        title: 'Charming 1-Bedroom Loft in Apo, Abuja',
        price: '$12,000',
        category: 'For Rent',
        image: 'https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e585ac4d66d47616bf478_image%20(72).png',
        squareFeet: 3200,
        bedrooms: 3,
        bathrooms: 2,
        link: '/properties/charming-1-bedroom-loft-in-manhattan-new-york'
        },
        {
        id: '3',
        title: 'Luxurious 5-Bedroom House in G.R.A, Port-Harcourt',
        price: '$1,405,000',
        category: 'For Sale',
        image: 'https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e581672bad0b8b429e9b9_image%20(71).png',
        squareFeet: 4500,
        bedrooms: 3,
        bathrooms: 2,
        link: '/properties/luxurious-5-bedroom-house-in-kensington-london'
        },
        {
        id: '4',
        title: 'Modern 2-Bedroom Condo in Victoria Island, Lagos',
        price: '$11,000/mo',
        category: 'For Rent',
        image: 'https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e57d692e6dab5db84d2cd_image%20(70).png',
        squareFeet: 3900,
        bedrooms: 3,
        bathrooms: 2,
        link: '/properties/modern-2-bedroom-condo-in-marina-bay-singapore'
        },
        {
        id: '5',
        title: 'Elegant 3-Bedroom Penthouse in Victoria Island, Lagos',
        price: '$1,405,000',
        category: 'For Sale',
        image: 'https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5778d8568093c6e6aa3b_image%20(69).png',
        squareFeet: 2800,
        bedrooms: 5,
        bathrooms: 2,
        link: '/properties/elegant-3-bedroom-penthouse-in-hong-kong-island'
        },
        {
        id: '6',
        title: 'Stylish 2-Bedroom Apartment in Victoria Island, Lagos',
        price: '$1,405,000',
        category: 'For Sale',
        image: 'https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png',
        squareFeet: 3000,
        bedrooms: 3,
        bathrooms: 2,
        link: '/properties/stylish-2-bedroom-apartment-in-paris-france'
        }
];

  return (
    <section className="w-full flex justify-center items-center py-[15rem] md:py-[8rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-start items-center space-y-2 text-center mb-[5rem]">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured properties
                </h1>

               <p className="text-base md:text-lg text-alternativeTextBlack">
                    Explore a curated list of standout properties selected just for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <div className="text-center">
                <Link 
                    to="/properties" 
                    className="inline-flex items-center px-6 py-4 border border-alternativePastelYellow text-sm font-medium rounded-md text-alternativeTextBlack bg-alternativePastelYellow hover:bg-gray-50 hover:text-alternativeTextBlack hover:border-gray-200 transition-colors duration-200"
                >
                    Explore All Listings
                </Link>
            </div>
                
        </div>
    </section>
  );
};

export default FeaturedListings;