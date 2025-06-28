import { Calendar, Clock, Share2, Home } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '@/store/data';
import { useParams, Link, Navigate } from 'react-router-dom';
import { formatDate } from '@/utils';
import arrowLeft from '@/assets/images/arrowleft.svg';
import Footer from '@/components/common/Footer';

const BlogArticle = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const { slug } = useParams<{ slug: string }>();
  const article = blogPosts.find((selectedProperty) => selectedProperty.slug === slug);

  if (!article) {
    return <Navigate to="/properties" replace />;
  }

  return (
    <>
      <article className="mx-auto max-w-4xl px-4 py-8">
        <Link
          to="/blog"
          className="hover:text-alternativeTextBlack mb-8 inline-flex items-center gap-2 text-gray-600 transition-colors"
        >
          <img src={arrowLeft} alt="arrowLeft" />
          <span className="text-[14px] md:text-[16px]">Back to Blog</span>
        </Link>

        <header className="mb-8">
          {article.category && (
            <span className="bg-alternativePastelYellow text-alternativeTextBlack mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
              {article.category}
            </span>
          )}

          <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
            {article.title}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </div>

            {article.readTime && (
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime} min read</span>
              </div>
            )}

            <div className="relative">
              <button
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="hover:text-alternativeTextBlack flex items-center gap-2 transition-colors"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {article.author && (
            <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
              {article.author.avatar && (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
              <div>
                <div className="font-medium text-gray-900">{article.author.name}</div>
                {article.author.bio && (
                  <div className="mt-1 text-sm text-gray-600">{article.author.bio}</div>
                )}
              </div>
            </div>
          )}
        </header>

        <div className="mb-8">
          <img
            src={article.image}
            alt={`image${article.slug}`}
            className="h-64 w-full rounded-lg object-cover shadow-lg md:h-96"
          />
        </div>

        <div className="prose prose-lg mb-12 max-w-none">
          <div
            className="leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-alternativePastelYellow text-alternativeTextBlack cursor-pointer rounded-full px-3 py-1 text-sm transition-colors hover:border-gray-200 hover:bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="text-alternativeTextBlack relative overflow-hidden rounded-2xl py-[4rem] text-center">
          <div className="relative z-10">
            <Home className="mx-auto mb-4 h-12 w-12 opacity-90 drop-shadow-sm" />
            <h3 className="mb-2 text-xl font-semibold drop-shadow-sm">
              Ready to Find Your Dream Home?
            </h3>
            <p className="mb-6 opacity-90 drop-shadow-sm">
              Let our experienced team help you navigate the real estate market and find the perfect
              property.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/properties"
                className="bg-alternativePastelYellow/90 text-alternativeTextBlack hover:bg-alternativePastelYellow rounded-lg px-6 py-3 font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact-us"
                className="bg-alternativeTextBlack/90 hover:bg-alternativeTextBlack rounded-lg px-6 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contact an Agent
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
};

export default BlogArticle;
