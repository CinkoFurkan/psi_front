const Image = ({ blog }) => {
  return (
    <img
      src={blog.image}
      alt={blog.title}
      className='object-cover w-full h-48 rounded-md'
    />
  );
};

export default Image;
