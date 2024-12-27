const Image = ({ event }) => {
  return (
    <img
      src={event.image}
      alt="Event"
      className="object-cover w-full h-full"
    />
  );
};

export default Image;
