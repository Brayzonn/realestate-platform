import { Property } from '@/ts-types/propertyTypes';

interface PropertyImageGalleryProps {
  property: Property;
}

const PropertyImageGallery = ({ property }: PropertyImageGalleryProps) => {
  return (
    <>
      <section className="flex w-full flex-col space-y-[3rem] py-[1rem]">
        <h1 className="flex w-full items-center gap-4 text-left text-[27px] font-[900] uppercase md:text-[36px]">
          Photo Gallery
          <span className="block h-[2px] w-[60px] bg-black"></span>
        </h1>

        <div className="mb-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${property.title}`}
              className="h-[240px] w-full object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PropertyImageGallery;
