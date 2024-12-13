import { useNavigate } from "react-router-dom";

export default function BlogWriter({ data }) {
    const navigate = useNavigate();

    const handleMemberClick = (id) => {
        navigate(`/member/${id}`);
    };

    return (
        <div
            className="flex flex-col items-center text-gray-600 cursor-pointer"
            onClick={() => handleMemberClick(data.blogs?.writer_id)}
        >
            <div className="flex items-center space-x-3 mb-2">
                <img
                    src={`https://psi-back.onrender.com${data.blogs?.writer_image}`}
                    alt={`${data.blogs?.writer_f} ${data.blogs?.writer_l}`}
                    className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                />
                <div>
                    <p className="font-semibold text-black">
                        {data.blogs?.writer_f} {data.blogs?.writer_l}
                    </p>
                    <p className="text-sm text-gray-500">
                        {data.blogs?.writer_title}
                    </p>
                </div>
            </div>
        </div>
    );
}
