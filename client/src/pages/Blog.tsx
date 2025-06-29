import { useState } from 'react';
import NavMenu from '@/components/common/NavMenu';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import companylogoblack from '@/assets/images/companylogoblack.svg';
import BlogHero from '@/components/layout/blog/BlogHero';
import AllBlogPosts from '@/components/layout/blog/AllBlogPosts';
// import BlogFeaturedPost from '@/components/layout/blog/BlogFeaturedPost';

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`text-mainTextBlack flex min-h-screen flex-col ${isMenuOpen ? 'h-screen overflow-hidden' : 'relative'}`}
    >
      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        defaultLogo={companylogoblack}
        scrolledLogo={companylogoblack}
        toggleMenu={toggleMenu}
        showBorder={true}
        borderOnMobileOnly={false}
      />

      <main className="mx-auto max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <BlogHero />

        {/* <BlogFeaturedPost /> */}

        <AllBlogPosts />
      </main>

      <Footer />
      <NavMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  );
};

export default Blog;
