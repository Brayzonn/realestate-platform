
const PropertyImageGallery = () => {
  
   const testImagesPlaceholder = [
        "https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png",
        "https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png",
        "https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png",
        "https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png",
        "https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png",
        "https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670e5738e8d02cef5b68b66a_image%20(68).png",
   ];

  return (
    <>
        {testImagesPlaceholder.map((image, index) => (
            <img 
                key={index}
                src={image} 
                alt={`Property ${index + 1}`}
                className="w-full h-[240px] object-cover"
                loading="lazy"
            />
        ))}
   </>
  )
}

export default PropertyImageGallery

