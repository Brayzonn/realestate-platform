import { Property, SlideImage } from '@/ts-types/propertyTypes';
import { Communities } from '@/ts-types/communityTypes';
import { BlogPost } from '@/ts-types/blogTypes';

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
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6c7e5bfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522444120501-4a6b2924e540?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
    avgPrice: '₦70,000,000',
    description:
      'Established suburban neighborhood with tree-lined streets, excellent schools, and family-friendly amenities. Perfect for growing families and professionals seeking quiet residential living.',
    highlights: ['Top-Rated Schools', 'Family Parks', 'Single Family Homes', 'Community Center'],
    image:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    activeListings: 24,
  },
  {
    id: '13',
    name: 'Oakwood Estates',
    avgPrice: '₦95,000,000',
    description:
      'Premium suburban community featuring executive homes, manicured landscapes, and exclusive amenities. Luxury living in a peaceful residential setting.',
    highlights: ['Executive Homes', 'Golf Course Access', 'Gated Community', 'Luxury Amenities'],
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    activeListings: 18,
  },
  {
    id: '63',
    name: 'Heritage Village',
    avgPrice: '₦185,000,000',
    description:
      'Charming suburban neighborhood with historic character, community gardens, and local shops. Perfect for those seeking authentic suburban charm and community connection.',
    highlights: ['Historic Homes', 'Community Gardens', 'Local Shops', 'Neighborhood Events'],
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    activeListings: 12,
  },
  {
    id: '12',
    name: 'Lakeside Commons',
    avgPrice: '₦170,250,000',
    description:
      'Exclusive suburban waterfront community with stunning lake views, private beaches, and resort-style amenities. The pinnacle of suburban luxury living.',
    highlights: ['Lake Views', 'Private Beach', 'Waterfront Homes', 'Marina Club'],
    image:
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    activeListings: 8,
  },
  {
    id: '09',
    name: 'College Park',
    avgPrice: '₦220,000,000',
    description:
      'Family-friendly suburban neighborhood near major universities. Perfect for faculty, staff, and young families seeking affordable suburban living with educational access.',
    highlights: ['University Access', 'Family Friendly', 'Affordable Homes', 'School District'],
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    activeListings: 31,
  },
  {
    id: '76',
    name: 'Innovation Park',
    avgPrice: '₦410,000,000',
    description:
      'Modern suburban community near major corporate campuses with contemporary homes, green spaces, and smart home technology. Perfect for tech professionals and modern families.',
    highlights: ['Corporate Access', 'Smart Homes', 'Green Spaces', 'Modern Design'],
    image:
      'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    activeListings: 15,
  },
];

export const slideImages: SlideImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80',
    alt: 'Modern interior design living room',
  },
  {
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    alt: 'Contemporary kitchen design',
  },
  {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    alt: 'Elegant bedroom interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    alt: 'Stylish home office space',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Home Buying Tips for First-Time Buyers',
    slug: 'top-10-home-buying-tips-first-time-buyers',
    excerpt:
      'Navigate the home buying process with confidence. Our comprehensive guide covers everything from pre-approval to closing day.',
    content:
      'Welcome to company, where your journey into the world of real estate begins. Our website is your gateway to a seamless, personalized, and transformative property experience. Designed with you in mind, company offers a comprehensive platform for buyers, sellers, and investors alike.',
    author: {
      name: 'Sarah Johnson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      bio: 'Senior Real Estate Agent',
    },
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Buying Guide',
    tags: ['First Time Buyers', 'Home Buying', 'Tips'],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    views: 1245,
    likes: 89,
  },
  {
    id: '2',
    title: 'Understanding Real Estate Market Trends in 2024',
    slug: 'understanding-real-estate-market-trends-2024',
    excerpt:
      'Get insights into the latest market trends, pricing patterns, and what to expect in the real estate landscape this year.',
    content:
      'Welcome to company, where your journey into the world of real estate begins. Our website is your gateway to a seamless, personalized, and transformative property experience. Designed with you in mind, company offers a comprehensive platform for buyers, sellers, and investors alike.',
    author: {
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      bio: 'Market Analyst',
    },
    publishedAt: '2024-01-12',
    readTime: '6 min read',
    category: 'Market Analysis',
    tags: ['Market Trends', '2024', 'Investment'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    views: 892,
    likes: 56,
  },
  {
    id: '3',
    title: 'How to Stage Your Home for a Quick Sale',
    slug: 'how-to-stage-home-quick-sale',
    excerpt:
      'Learn professional staging techniques that help homes sell faster and for better prices. Simple tips that make a big difference.',
    content:
      'Welcome to company, where your journey into the world of real estate begins. Our website is your gateway to a seamless, personalized, and transformative property experience. Designed with you in mind, company offers a comprehensive platform for buyers, sellers, and investors alike.',
    author: {
      name: 'Emily Rodriguez',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      bio: 'Interior Design Specialist',
    },
    publishedAt: '2024-01-10',
    readTime: '5 min read',
    category: 'Selling Tips',
    tags: ['Home Staging', 'Selling', 'Interior Design'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    views: 1567,
    likes: 134,
  },
  {
    id: '4',
    title: 'Investment Property vs. Primary Residence: What You Need to Know',
    slug: 'investment-property-vs-primary-residence',
    excerpt:
      'Explore the key differences between buying an investment property and a primary residence, including financing and tax implications.',
    content:
      'Welcome to company, where your journey into the world of real estate begins. Our website is your gateway to a seamless, personalized, and transformative property experience. Designed with you in mind, company offers a comprehensive platform for buyers, sellers, and investors alike.',
    author: {
      name: 'David Park',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      bio: 'Investment Advisor',
    },
    publishedAt: '2024-01-08',
    readTime: '10 min read',
    category: 'Investment',
    tags: ['Investment', 'Finance', 'Property'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    views: 743,
    likes: 67,
  },
  {
    id: '5',
    title: 'Neighborhood Guide: Finding the Perfect Community',
    slug: 'neighborhood-guide-finding-perfect-community',
    excerpt:
      'Discover how to evaluate neighborhoods beyond just the house itself. Schools, amenities, and future development matter.',
    content:
      'Welcome to company, where your journey into the world of real estate begins. Our website is your gateway to a seamless, personalized, and transformative property experience. Designed with you in mind, company offers a comprehensive platform for buyers, sellers, and investors alike.',
    author: {
      name: 'Lisa Wong',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      bio: 'Community Specialist',
    },
    publishedAt: '2024-01-05',
    readTime: '7 min read',
    category: 'Neighborhood Guide',
    tags: ['Neighborhoods', 'Community', 'Lifestyle'],
    featured: true,
    image:
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    views: 2103,
    likes: 178,
  },
  {
    id: '6',
    title: 'The Complete Guide to Home Inspections',
    slug: 'complete-guide-home-inspections',
    excerpt:
      'Everything you need to know about home inspections, from what to expect to how to interpret the results.',
    content:
      'Welcome to company, where your journey into the world of real estate begins. Our website is your gateway to a seamless, personalized, and transformative property experience. Designed with you in mind, company offers a comprehensive platform for buyers, sellers, and investors alike.',
    author: {
      name: 'Robert Kim',
      avatar:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
      bio: 'Licensed Inspector',
    },
    publishedAt: '2024-01-03',
    readTime: '12 min read',
    category: 'Buying Guide',
    tags: ['Home Inspection', 'Due Diligence', 'Safety'],
    featured: false,
    image:
      'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    views: 1834,
    likes: 156,
  },
];
