const Image = ({ event }) => {
  return (
    <img
      src={`https://psi-back.onrender.com${event.image}`}
      alt="Event"
      className="object-cover w-full h-auto"
    />
  );
};

export default Image;
