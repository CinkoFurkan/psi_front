import React from 'react';
import Button from '../../components/button';
import Image from './components/Image';
import Info from './components/Info';
import useFetch from '../../hooks/get';
import {motion} from 'framer-motion';
import Spinner from "../../components/spinner";

const Events = () => {

    const {data, loading} = useFetch('event');
    const sortedEvents = data?.event?.sort(
        (a, b) => new Date(b.event_date) - new Date(a.event_date)
    );

    const currentDate = new Date();

    if (loading) {
        return (
            <Spinner/>
        );
    }

    return data && data.event ? (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="min-h-screen px-4 py-10 sm:px-8 lg:px-16"
        >
            <div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 place-items-center"
            >
                {sortedEvents.map((event, index) => {
                    const isEventPast = new Date(event.event_date) < currentDate;
                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-between bg-[#e8e4d8] border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 w-full sm:w-auto h-full"
                        >
                            {event.image && <Image event={event}/>}
                            <div className="flex flex-col justify-between items-center w-full p-6 space-y-3 h-full">
                                <Info event={event}/>

                                {isEventPast ? (
                                    <Button
                                        as="a"
                                        href={event.summary_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        size="normal"
                                    >
                                        Özet
                                    </Button>
                                ) : (
                                    <Button
                                        as="a"
                                        href={event.registration_link || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="primary"
                                        size="normal"
                                    >
                                        {event.registration_link ? 'Kayıt ol' : 'Kayıt Ol'}
                                    </Button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    ) : (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl font-semibold text-gray-700">Veriler alınamadı.</p>
        </div>
    );
};

export default Events;
