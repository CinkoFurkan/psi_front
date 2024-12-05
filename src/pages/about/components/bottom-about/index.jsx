export default function BottomAbout({ aboutSections }) {
    return (
        <div className='flex justify-center w-full mt-12'>
            <div className='text-center'>
                <h4 className='mb-3 text-lg font-bold text-primary'>
                    {aboutSections[4]?.title}
                </h4>
                <p className='leading-snug text-black'>
                    {aboutSections[4]?.text}
                </p>
            </div>
        </div>
    );
}
