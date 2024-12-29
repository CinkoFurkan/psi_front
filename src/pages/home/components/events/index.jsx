import React from "react";
import useFetch from "../../../../hooks/get";
import Button from "../../../../components/button";
import Image from "./components/image";
import Info from "./components/info";
import { motion } from 'framer-motion';
import Spinner from "../../../../components/spinner";

const Events = () => {
  const { data, loading } = useFetch('event');

  if (loading) {
    return <Spinner />;
  }

  const sortedEvents = data.event?.sort(
      (a, b) => new Date(b.event_date) - new Date(a.event_date)
  );

  const currentDate = new Date();

  const lastThreeEvents = sortedEvents?.slice(0, 4);

  return data && data.event ? (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen px-4 py-10 sm:px-8 lg:px-16"
      >
        <h1 className="mb-8 text-2xl font-bold text-center text-gray-900 md:text-3xl lg:text-4xl">
          Etkinlikler
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {lastThreeEvents.map((event) => {
            const isEventPast = new Date(event.event_date) < currentDate;
            const eventDate = new Date(event.event_date).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
                <div
                    key={event.id}
                    className="flex flex-col justify-between bg-[#e8e4d8] border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 w-full sm:w-auto h-full"
                >
                  {event.image && <Image event={event} />}
                  <div className="flex flex-col justify-between items-center w-full p-6 space-y-3 h-full">
                    <Info event={event} eventDate={eventDate} />

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
                          {event.registration_link ? 'Kayıt Ol' : 'Kayıt Kapalı'}
                        </Button>
                    )}
                  </div>
                </div>
            );
          })}
        </div>
      </motion.div>
  ) : (
      <div className="text-center text-gray-500">
        <p>Henüz etkinlik bulunmamaktadır.</p>
      </div>
  );
};

export default Events;
