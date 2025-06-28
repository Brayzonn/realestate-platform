import { blogPosts } from '@/store/data';
import { Link } from 'react-router-dom';

const NewsUpdate = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div className="mb-20 text-left">
        <div className="mb-8 flex items-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">Blog</span>
        </div>

        <h2 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          Articles & <span className="font-medium">News Updates</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((article) => (
          <div key={article.id} className="group">
            <Link
              to={`/blog/${article.id}`}
              className="block overflow-hidden rounded-sm border border-gray-200/60 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  loading="lazy"
                  src={article.image}
                  alt={`image${article.id}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h4 className="mb-4 line-clamp-2 text-lg leading-snug font-medium text-gray-900 transition-colors duration-200 group-hover:text-gray-600">
                  {article.title}
                </h4>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-light tracking-wide text-gray-500 uppercase">
                    {article.publishedAt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdate;
