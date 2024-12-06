import React from "react";

export default function TopAbout({ aboutSections }) {
    return (
        <>
            <div className='flex flex-col justify-center w-full'>
                <p className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                    {aboutSections[1]?.title}
                </p>
            </div>
            <div>
                <p className='mb-3 text-md text-justify text-black'>
                    {aboutSections[1]?.text || "Default text if no data"}
                </p>
                {aboutSections[1]?.image && (
                    <img
                        src={`https://psi-back.onrender.com${aboutSections[1]?.image}`}
                        alt='About'
                        className='w-full sm:w-3/4 h-[250px] sm:h-[410px] mx-auto mt-10 object-cover'
                    />
                )}
            </div>
        </>
    );
}
