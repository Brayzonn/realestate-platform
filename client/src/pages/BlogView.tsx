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
      <article className="mx-auto max-w-4xl px-4 py-[4rem]">
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
          <div className="py-[7rem]">
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

        <section className="rounded-sm border border-gray-200/60 bg-white p-12 text-center shadow-sm">
          <div className="space-y-8">
            <Home className="mx-auto h-12 w-12 text-gray-600" />

            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900">
                Ready to Find Your <span className="font-medium">Dream Home?</span>
              </h3>
              <p className="mx-auto max-w-md leading-relaxed font-light text-gray-600">
                Let our experienced team help you navigate the real estate market and find the
                perfect property.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/properties"
                className="rounded-sm border border-gray-300 bg-white px-8 py-4 font-medium text-gray-900 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg active:scale-[0.98]"
              >
                Browse Properties
              </Link>
              <Link
                to="/contact-us"
                className="rounded-sm bg-gray-900 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]"
              >
                Contact an Agent
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default BlogArticle;
