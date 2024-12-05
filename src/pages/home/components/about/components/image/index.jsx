const Image = ({ data }) => {
    return (
        <div className="flex justify-center w-full">
            <img
                src={`https://psi-back.onrender.com${data.about[0].image}`}
                alt="About Us"
                className="object-cover w-full h-72 sm:h-96 md:h-full lg:max-h-[400px] rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Image;

