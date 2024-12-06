export default function Image({image}) {
    return (
        <div className="flex justify-center mb-4">
            {image ? (
                <img
                    src={`https://psi-back.onrender.com${image}`}

                    className="w-64 h-64 border-4 border-white rounded-full shadow-xl"
                />
            ) : (
                <div
                    className="flex items-center justify-center w-64 h-64 text-indigo-500 bg-indigo-100 border-4 border-white rounded-full shadow-xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-24 h-24"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            )}
        </div>
    )
}