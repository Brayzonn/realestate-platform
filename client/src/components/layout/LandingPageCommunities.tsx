import React from 'react';
import { Link } from 'react-router-dom';

interface Community {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const LandingPageCommunities: React.FC = () => {
  const communities: Community[] = [
    {
      id: '1',
      name: 'Waterfront Estates',
      description: 'Luxury lakefront properties with stunning water views and premium amenities.',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Lakefront Access', 'Marina', 'Golf Course', 'Clubhouse'],
    },
    {
      id: '2',
      name: 'Urban Heights',
      description: 'Modern city living with convenient access to downtown and transportation.',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['City Views', 'Transit Access', 'Shopping Centers', 'Parks'],
    },
    {
      id: '3',
      name: 'Family Gardens',
      description: 'Family-friendly neighborhood with parks, schools, and community spaces.',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Top Schools', 'Playgrounds', 'Community Center', 'Walking Trails'],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 flex flex-col items-start justify-start text-left">
        <div className="mb-4 flex items-center justify-start space-x-4">
          <div className="h-[2px] w-12 bg-yellow-400"></div>
          <h2 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
            communities
          </h2>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Discover Our Communities
        </h2>
        <p className="w-full max-w-2xl text-left text-lg text-gray-600">
          Explore thoughtfully designed neighborhoods that offer the perfect blend of comfort,
          convenience, and community living.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {communities.slice(0, 3).map((community) => (
          <div
            key={community.id}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={community.image}
                alt={community.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{community.name}</h3>
              <p className="mb-4 line-clamp-2 text-gray-600">{community.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {community.features.map((feature, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/communities"
          className="hover:bg-alternativePastelYellow hover:text-alternativeTextBlack hover:border-alternativePastelYellow inline-flex items-center space-x-2 rounded-md border border-black bg-black px-6 py-4 text-sm font-medium text-white transition-colors duration-200"
        >
          <span>View All Communities</span>
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LandingPageCommunities;
