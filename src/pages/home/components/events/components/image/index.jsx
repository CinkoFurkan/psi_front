import React from "react";

const Image = ({ event }) => {
  return (
    <img
      src={event.image}
      alt="Event"
      className="object-cover w-full h-auto sm:h-auto md:h-auto lg:h-auto"
    />
  );
};

export default Image;
