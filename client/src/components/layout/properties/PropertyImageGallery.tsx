import { Property } from '@/ts-types/propertyTypes';

const PropertyImageGallery = ({ property }: { property: Property }) => {
  const galleryImages = property.images.filter((image) => image !== property.featuredImage);

  return (
    <section className="flex w-full flex-col space-y-16 py-24">
      <div className="text-left">
        <div className="mb-8 flex items-center space-x-4">
          <div className="h-px w-16 bg-yellow-400"></div>
          <span className="text-sm font-medium tracking-[0.2em] text-gray-600 uppercase">
            Gallery
          </span>
        </div>

        <h1 className="text-4xl leading-tight font-light text-gray-900 md:text-5xl lg:text-6xl">
          Photo <span className="font-medium">Gallery</span>
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((activeImg, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-sm border border-gray-200/60 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={activeImg}
                alt={`activeImg`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyImageGallery;
