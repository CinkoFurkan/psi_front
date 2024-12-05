import useFetch from '../../../../hooks/get';
import Image from './components/image';
import Info from './components/info';
import Extra from './components/extra';

const Blog = () => {
  const { data } = useFetch('blog');

  return data && data.blogs ? (
    <div className='flex flex-col items-center w-full p-8 mt-10'>
      <h1 className='mb-8 text-4xl font-bold text-gray-900'>Bloglar</h1>
      <div className='grid grid-cols-3 gap-8'>
        {data.blogs.map((blog, index) => (
          <div key={index} className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flex flex-col items-center justify-between p-4 bg-white border rounded-lg shadow-md flip-card-front'>
                <Image blog={blog} />
                <Info blog={blog} />
              </div>

              <Extra blog={blog} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Blog;
