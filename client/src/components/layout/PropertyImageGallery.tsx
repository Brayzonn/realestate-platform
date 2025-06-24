import { Property } from "@/ts-types/property";

interface PropertyImageGalleryProps {
    property: Property;
}

const PropertyImageGallery = ({property} : PropertyImageGalleryProps) => {

  return (
    <>
    {property.images.map((image, index) => (
        <img 
          key={index}
          src={image} 
          alt={`${property.title}`}
          className="w-full h-[240px] object-cover"
          loading="lazy"
        />
    ))}
   </>
  )
}

export default PropertyImageGallery


