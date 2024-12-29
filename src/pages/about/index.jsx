import React, {useState, useEffect} from "react";
import useFetch from '../../hooks/get';
import {motion} from "framer-motion";
import Spinner from "../../components/spinner";

const About = () => {

    const {data: aboutData, loading} = useFetch('about');
    const aboutSections = aboutData?.about || [];

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            {loading ? (
                <Spinner/>
            ) : (
                <section className="py-8">
                    <div className="container mx-auto flex flex-col my-4 md:my-8 px-4 md:px-8">
                        <div className="flex flex-col w-full mb-8">
                            <p className="text-3xl md:text-4xl font-semibold leading-relaxed text-center mb-4 text-black">
                                {aboutSections[1]?.title || "Default Title"}
                            </p>
                            <p className="text-sm md:text-base text-black text-justify mb-4">
                                {aboutSections[1]?.text || "Default description about the working process."}
                            </p>
                            <div className="flex justify-center mb-8">
                                <img
                                    src={aboutSections[1]?.image || ""}
                                    alt={aboutSections[1]?.title || "Default Title"}
                                    className="w-6/8 md:w-3/5 lg:w-6/8 xl:w-6/8 pt-4 object-contain rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="relative">
                                {aboutSections.slice(2, 4).map((section, index) => (
                                    <div
                                        key={index}
                                        className="mb-8 flex flex-col items-center text-center"
                                    >
                                        <div className="w-4 h-4 bg-primary rounded-full"></div>

                                        <div className="mt-4 px-4 md:px-8 w-full md:w-3/3">
                                            <h4 className="font-bold text-lg md:text-2xl text-black mb-2">
                                                {section?.title || "Default Title"}
                                            </h4>
                                            <p className="text-sm md:text-base text-gray-700 text-justify">
                                                {section?.text || "Default text for the section."}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-3xl md:text-4xl font-semibold leading-relaxed mb-4 text-black">
                                {aboutSections[4]?.title || "Default Title"}
                            </p>
                            <p className="text-sm md:text-base text-gray-700 text-justify">
                                {aboutSections[4]?.text || "Default description about the working process."}
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </motion.div>
    );
};

export default About;
