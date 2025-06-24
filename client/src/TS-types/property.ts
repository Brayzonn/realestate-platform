export interface Property {
  id: string;
  title: string;
  description: string; 
  price: string; 
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  images: string[]; 
  featuredImage: string; 
  category: 'For Sale' | 'For Rent';
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
}
