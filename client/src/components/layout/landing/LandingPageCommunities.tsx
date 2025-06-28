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
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="mb-20 text-left">
        <div className="mb-8 flex items-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
            Communities
          </span>
        </div>

        <h2 className="mb-6 text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          Discover Our <span className="font-medium">Communities</span>
        </h2>

        <p className="max-w-3xl text-lg leading-relaxed font-light text-gray-600">
          Explore thoughtfully designed neighborhoods that offer the perfect blend of comfort,
          convenience, and community living crafted for modern lifestyles.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {communities.slice(0, 3).map((community) => (
          <div
            key={community.id}
            className="group overflow-hidden rounded-sm border border-gray-200/60 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={community.image}
                alt={community.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-7">
              <h3 className="mb-4 text-xl leading-snug font-medium text-gray-900">
                {community.name}
              </h3>

              <p className="mb-6 line-clamp-2 leading-relaxed font-light text-gray-600">
                {community.description}
              </p>

              <div className="space-y-4 border-t border-gray-100 pt-4">
                <h4 className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {community.features.map((feature, index) => (
                    <span
                      key={index}
                      className="rounded-sm border border-gray-200/60 bg-gray-50 px-3 py-1.5 text-sm font-light text-gray-700 transition-colors hover:bg-gray-100"
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
          className="group inline-flex items-center space-x-3 rounded-sm bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
        >
          <span>View All Communities</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
