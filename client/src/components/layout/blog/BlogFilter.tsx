import { useState } from 'react';

interface BlogFilterProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const BlogFilter = ({ searchTerm, setSearchTerm }: BlogFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Buying Guide',
    'Selling Tips',
    'Market Analysis',
    'Investment',
    'Neighborhood Guide',
  ];
  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 text-gray-900 placeholder-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <svg
              className="absolute top-3.5 left-3 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default BlogFilter;
