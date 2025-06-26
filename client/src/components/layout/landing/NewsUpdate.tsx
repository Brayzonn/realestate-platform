import React from 'react';

interface Article {
  id: string;
  href: string;
  title: string;
  date: string;
  image: {
    src: string;
    alt: string;
    srcset: string;
    sizes: string;
  };
}

const NewsUpdate: React.FC = () => {
  const articles: Article[] = [
    {
      id: '1',
      href: '/blog/understanding-mortgages-a-guide-for-first-time-homebuyers',
      title: 'Understanding mortgages a guide for first-time homebuyers',
      date: 'Oct 18, 2023',
      image: {
        src: 'https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b63c00a3f01bf7ca9d58_blog-thumb-07.jpg',
        alt: '',
        srcset:
          'https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b63c00a3f01bf7ca9d58_blog-thumb-07-p-500.jpg 500w, https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b63c00a3f01bf7ca9d58_blog-thumb-07-p-800.jpg 800w, https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b63c00a3f01bf7ca9d58_blog-thumb-07.jpg 824w',
        sizes: '(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 30vw',
      },
    },
    {
      id: '2',
      href: '/blog/the-importance-of-location-choosing-the-right-area-for-you',
      title: 'The importance of location choosing the right area for you',
      date: 'Oct 18, 2023',
      image: {
        src: 'https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b683f2ed6d97e98d0fec_blog-thumb-06.jpg',
        alt: '',
        srcset:
          'https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b683f2ed6d97e98d0fec_blog-thumb-06-p-500.jpg 500w, https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b683f2ed6d97e98d0fec_blog-thumb-06-p-800.jpg 800w, https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b683f2ed6d97e98d0fec_blog-thumb-06.jpg 824w',
        sizes: '(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 30vw',
      },
    },
    {
      id: '3',
      href: '/blog/the-future-of-real-estate-trends-shaping-the-industry',
      title: 'The future of real estate trends shaping the industry',
      date: 'Oct 18, 2023',
      image: {
        src: 'https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b696c50e78dccaec1090_blog-thumb-05.jpg',
        alt: '',
        srcset:
          'https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b696c50e78dccaec1090_blog-thumb-05-p-500.jpg 500w, https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b696c50e78dccaec1090_blog-thumb-05-p-800.jpg 800w, https://cdn.prod.website-files.com/65127446160a3ff5b1e6186c/6512b696c50e78dccaec1090_blog-thumb-05.jpg 824w',
        sizes: '(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 30vw',
      },
    },
  ];

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
        {articles.map((article) => (
          <div key={article.id} className="group">
            <a
              href={article.href}
              className="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  loading="lazy"
                  src={article.image.src}
                  alt={article.image.alt}
                  sizes={article.image.sizes}
                  srcSet={article.image.srcset}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {article.title}
                </h4>
                <p className="text-sm font-medium text-gray-500">{article.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdate;
