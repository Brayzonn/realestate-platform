import { Property, SlideImage } from '@/ts-types/propertyTypes';
import { Communities } from '@/ts-types/communityTypes';

export const propertiesData: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa',
    description:
      'Discover the perfect blend of style, convenience, and community in this meticulously designed townhouse. Nestled in a vibrant neighborhood, this urban oasis offers the best of city living with the comfort of a private residence. Boasting [4BHK] spacious bedrooms and [6 Bathrooms] well-appointed bathrooms, this townhouse provides ample space for families or professionals seeking a contemporary yet cozy home.',
    price: '₦285,000,000',
    location: 'Victoria Island, Lagos',
    coordinates: {
      lat: 6.4281,
      lng: 3.4219,
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 2100,
    bedrooms: 5,
    bathrooms: 6,
  },
  {
    id: '09',
    title: 'Modern Duplex',
    description: 'Discover the perfect blend of style, convenience, and community...',
    price: '₦150,000,000',
    location: 'Maitama, Abuja',
    coordinates: {
      lat: 9.0821,
      lng: 7.4951,
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 1800,
    bedrooms: 4,
    bathrooms: 5,
  },
  {
    id: '2',
    title: 'Contemporary Home',
    description: 'Discover the perfect blend of style, convenience, and community...',
    price: '₦95,000,000',
    location: 'GRA Phase 2, Port Harcourt',
    coordinates: {
      lat: 4.8156,
      lng: 7.0498,
    },
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 1350,
    bedrooms: 3,
    bathrooms: 4,
  },
  {
    id: '5',
    title: 'Executive Townhouse',
    description: 'Discover the perfect blend of style, convenience, and community...',
    price: '₦220,000,000',
    location: 'Ikoyi, Lagos',
    coordinates: {
      lat: 6.4488,
      lng: 3.4347,
    },
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 1950,
    bedrooms: 4,
    bathrooms: 5,
  },
  {
    id: '45',
    title: 'Family Residence',
    description: 'Discover the perfect blend of style, convenience, and community...',
    price: '₦78,000,000',
    location: 'New GRA, Makurdi',
    coordinates: {
      lat: 7.7329,
      lng: 8.5211,
    },
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 1200,
    bedrooms: 3,
    bathrooms: 4,
  },
  {
    id: '14',
    title: 'Modern Apartment',
    description: 'Discover the perfect blend of style, convenience, and community...',
    price: '₦185,000,000',
    location: 'Asokoro, Abuja',
    coordinates: {
      lat: 9.0092,
      lng: 7.534,
    },
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600563438938-a42a7d7b4d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 1650,
    bedrooms: 4,
    bathrooms: 5,
  },
  {
    id: '7',
    title: 'Elegant Bungalow',
    description: 'Discover the perfect blend of style, convenience, and community...',
    price: '₦125,000,000',
    location: 'GRA, Enugu',
    coordinates: {
      lat: 6.2649,
      lng: 7.3811,
    },
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'For Sale',
    squareFeet: 1580,
    bedrooms: 4,
    bathrooms: 4,
  },
];

export const communitiesData: Communities[] = [
  {
    id: '23',
    name: 'Maple Heights',
    avgPrice: '$650,000',
    description:
      'Established suburban neighborhood with tree-lined streets, excellent schools, and family-friendly amenities. Perfect for growing families and professionals seeking quiet residential living.',
    highlights: ['Top-Rated Schools', 'Family Parks', 'Single Family Homes', 'Community Center'],
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    activeListings: 24,
  },
  {
    id: '13',
    name: 'Oakwood Estates',
    avgPrice: '$825,000',
    description:
      'Premium suburban community featuring executive homes, manicured landscapes, and exclusive amenities. Luxury living in a peaceful residential setting.',
    highlights: ['Executive Homes', 'Golf Course Access', 'Gated Community', 'Luxury Amenities'],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    activeListings: 18,
  },
  {
    id: '63',
    name: 'Heritage Village',
    avgPrice: '$485,000',
    description:
      'Charming suburban neighborhood with historic character, community gardens, and local shops. Perfect for those seeking authentic suburban charm and community connection.',
    highlights: ['Historic Homes', 'Community Gardens', 'Local Shops', 'Neighborhood Events'],
    image:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    activeListings: 12,
  },
  {
    id: '12',
    name: 'Lakeside Commons',
    avgPrice: '$1,250,000',
    description:
      'Exclusive suburban waterfront community with stunning lake views, private beaches, and resort-style amenities. The pinnacle of suburban luxury living.',
    highlights: ['Lake Views', 'Private Beach', 'Waterfront Homes', 'Marina Club'],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    activeListings: 8,
  },
  {
    id: '09',
    name: 'College Park',
    avgPrice: '$420,000',
    description:
      'Family-friendly suburban neighborhood near major universities. Perfect for faculty, staff, and young families seeking affordable suburban living with educational access.',
    highlights: ['University Access', 'Family Friendly', 'Affordable Homes', 'School District'],
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    activeListings: 31,
  },
  {
    id: '76',
    name: 'Innovation Park',
    avgPrice: '$715,000',
    description:
      'Modern suburban community near major corporate campuses with contemporary homes, green spaces, and smart home technology. Perfect for tech professionals and modern families.',
    highlights: ['Corporate Access', 'Smart Homes', 'Green Spaces', 'Modern Design'],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    activeListings: 15,
  },
];

export const slideImages: SlideImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    alt: 'Modern interior design living room',
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    alt: 'Contemporary kitchen design',
  },
  {
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    alt: 'Elegant bedroom interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    alt: 'Stylish home office space',
  },
];
