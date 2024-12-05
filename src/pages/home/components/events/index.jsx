import React from "react";
import useFetch from "../../../../hooks/get";
import Button from "../../../../components/button";
import Image from "./components/image";
import Info from "./components/info";

const Events = () => {
  const { data } = useFetch("event");

  const sortedData = data.event?.sort(
    (a, b) => new Date(b.event_date) - new Date(a.event_date)
  );

  return data && data.event ? (
    <div className="flex flex-col items-center w-full px-4 py-8 mt-12 space-y-12">
      <h1 className="text-3xl font-bold text-center text-black sm:text-4xl">
        Etkinlikler
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {sortedData.slice(0, 3).map((event, index) => {
          const isPastEvent = new Date(event.event_date) < new Date();

          return (
            <div
              key={index}
              className="flex flex-col items-center bg-[#e8e4d8] border border-gray-300 shadow-md overflow-hidden"
            >
              {event.image && <Image event={event} />}
              <div className="flex flex-col items-center w-full p-4 sm:p-6 space-y-4">
                <Info event={event} />

                {isPastEvent ? (
                  <Button
                    as="a"
                    href={event.summary_link ? `http://localhost:8000${event.summary_link}` : "#"}
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
                    href={event.registration_link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="normal"
                  >
                    {event.registration_link ? "Kayıt ol" : "Kayıt Ol"}

                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-600">Loading events...</p>
  );
};

export default Events;
