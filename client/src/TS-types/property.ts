export interface Property {
  id: string;
  title: string;
  price: string;
  category: 'For Sale' | 'For Rent';
  image: string;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  link: string;
}