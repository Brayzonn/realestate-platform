import { blogPosts } from '@/store/data';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils';

const BlogFeaturedPost = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Articles</h2>
            <span className="block h-[2px] w-[60px] bg-yellow-400"></span>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredPosts.map((post) => (
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
                    <span className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500">{formatDate(post.publishedAt)}</time>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="group">
                    <h3 className="text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-yellow-600">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-3 line-clamp-3 text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.bio}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default BlogFeaturedPost;
