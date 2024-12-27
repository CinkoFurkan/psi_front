export default function Card({ image, description, reverse, title }) {
    if (!image) return null;
    return (
        <div className={`w-full p-5 flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-center flex-wrap`}>
            <div className="w-full md:w-1/3 lg:w-1/2 flex justify-center mt-4 md:mt-0">
    <div className="relative w-full h-full sm:h-full md:h-full p-2 border-4 border-gray-400 rounded-lg shadow-lg">
        <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img
                src={image}
                alt="Team member"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    </div>
</div>
            <div className="w-full md:w-2/3 lg:w-1/2 px-5 flex flex-col items-center justify-center">
                <h1 className="text-center text-2xl lg:text-3xl font-semibold mb-4 mt-6 text-gray-800">{title}</h1>
                {description && (
                    <p className="text-gray-600 text-justify text-base md:text-lg leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}