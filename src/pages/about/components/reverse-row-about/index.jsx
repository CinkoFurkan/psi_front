export default function ReverseRowAbout({otherAboutSections}) {
    return (
        <div className='ml-0'>
            <div className='container w-full h-full mx-auto'>
                <div className='relative h-full p-10 overflow-hidden'>
                    <div className='absolute h-full border-2 right-1/2 border-yellow-500 rounded'>
                    </div>
                    <div className='absolute h-full border-2 left-1/2 border-yellow-500 rounded'>
                    </div>

                    {otherAboutSections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between w-full mb-24 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                        >
                            <div className='order-1 w-5/12'>
                                {section.image && (
                                    <img
                                        src={`https://psi-back.onrender.com${section.image}`}
                                        alt={section.title}
                                        className='w-full h-auto'
                                    />
                                )}
                            </div>
                            <div className='order-1 w-5/12 px-1 py-4'>
                                <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                                    {section.title}
                                </h4>
                                <p className='text-md leading-snug text-black text-justify md:text-base'>
                                    {section.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}