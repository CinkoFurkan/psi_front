const Image = ({ data }) => {
    return (
      <div className="flex justify-center w-full">
        {/* Image for large screens and larger */}
        <img
          src={data.about[0].image}
          alt="About Us"
          className="hidden lg:block object-cover w-full h-72 sm:h-96 md:h-full lg:max-h-[400px] rounded-lg shadow-lg"
        />
        {/* Phone image for smaller screens */}
        <img
          src={data.about[0].phone_image}
          alt="About Us (Phone)"
          className="block lg:hidden object-cover w-full h-72 sm:h-96 md:h-full lg:max-h-[400px] rounded-lg shadow-lg"
        />
      </div>
    );
  };
  
  export default Image;
  