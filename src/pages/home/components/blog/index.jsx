import useFetch from '../../../../hooks/get';
import Image from './components/image';
import Info from './components/info';
import Extra from './components/extra';
import Spinner from '../../../../components/Spinner';

const Blog = () => {
    const { data, loading } = useFetch('blog');

    if (loading) {
        return <Spinner />;
    }

    return data && data.blogs.length > 0 ? (
        <div className="flex flex-col items-center w-full p-8 mt-10">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">Bloglar</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.blogs.map((blog) => (
                    <div key={blog.id} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flex flex-col items-center justify-between p-4 bg-white border rounded-lg shadow-md flip-card-front">
                                <Image blog={blog} />
                                <Info blog={blog} />
                            </div>

                            <Extra blog={blog} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="text-center text-gray-500">
            <p>Henüz blog bulunmamaktadır.</p>
        </div>
    );
};

export default Blog;
