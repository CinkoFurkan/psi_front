import useFetch from "../../../../hooks/get";
import Description from "./components/desc";
import Image from "./components/image";

const About = () => {
  const { data } = useFetch("/about/");

  return data && data.about ? (
      <div className="flex items-center justify-center px-4 py-12 mt-20">
        {data.about[0] && (
            <div
                key={0}
                className="flex flex-col items-center bg-[#e8e4d8] p-8 rounded-lg shadow-md sm:flex-row sm:space-x-6 sm:p-12 w-full max-w-7xl"
            >
              <div className="w-full sm:w-1/2 flex justify-center">
                <Image data={data} />
              </div>

              <div className="w-full sm:w-1/2 text-justify leading-relaxed">
                <Description data={data} />
              </div>
            </div>
        )}
      </div>
  ) : null;
};

export default About;
