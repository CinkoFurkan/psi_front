const Info = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  const { date, time } = formatDate(event.event_date);

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 line-clamp-1 text-center sm:text-xl">
        {event.title}
      </h2>

      <p className="flex-grow h-16 overflow-hidden text-sm text-gray-700 line-clamp-3 sm:text-xs">
        {event.description}
      </p>

      <div className="flex flex-col items-center space-y-1 text-sm text-gray-500 text-center">
        <p>📍 {event.location}</p>
        <p>📅 {date}</p>
        <p>⏰ {time}</p>
      </div>
    </>
  );
};

export default Info;
