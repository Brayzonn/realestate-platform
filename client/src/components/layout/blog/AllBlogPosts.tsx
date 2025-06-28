import { formatDate } from '@/utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogPosts } from '@/store/data';
import BlogFilter from './BlogFilter';

const AllBlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <BlogFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <section className="py-8">
        <div className="mb-16 text-left">
          <div className="mb-8 flex items-center space-x-4">
            <div className="h-px w-16 bg-yellow-400"></div>
            <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
              Latest
            </span>
          </div>

          <h2 className="text-[40px] leading-tight font-light text-gray-900 md:text-[45px] lg:text-[50px]">
            Latest <span className="font-medium">Articles</span>
          </h2>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 py-[4rem] md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500">{formatDate(post.publishedAt)}</time>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="group">
                    <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-yellow-600">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-3 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        className="h-6 w-6 rounded-full object-cover"
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                      <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.485 0-4.735.785-6.508 2.106A8.012 8.012 0 012 18.5V21h20v-2.5a8.012 8.012 0 00-3.492-4.394z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No articles found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search terms or selected category.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default AllBlogPosts;
