import { blogPosts } from '@/store/data';
import { Link } from 'react-router-dom';

const NewsUpdate = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 flex flex-col items-start text-center">
        <div className="mb-4 flex items-center justify-center space-x-4">
          <div className="h-[2px] w-12 bg-yellow-400"></div>
          <h2 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">blog</h2>
        </div>
        <h2 className="text-left text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Articles &amp; News Updates
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((article) => (
          <div key={article.id} className="group">
            <Link
              to={`/blog/${article.id}`}
              className="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  loading="lazy"
                  src={article.image}
                  alt={`image${article.id}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-yellow-600">
                  {article.title}
                </h4>
                <p className="text-sm font-medium text-gray-500">{article.publishedAt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdate;
