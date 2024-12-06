const Info = ({ blog }) => {
    return (
      <>
        <h2 className='mt-4 text-xl font-semibold text-gray-800'>{blog.title}</h2>
        <div className='flex items-center mt-4'>
          <img
            src={`https://psi-back.onrender.com${blog.writer_image}`}
            alt={`${blog.writer_f} ${blog.writer_l}`}
            className='w-10 h-10 mr-3 rounded-full'
          />
          <div>
            <p className='text-sm font-medium text-gray-800'>
              {blog.writer_f} {blog.writer_l}
            </p>
            <p className='text-xs text-gray-500'>{blog.writer_title}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Info;
  