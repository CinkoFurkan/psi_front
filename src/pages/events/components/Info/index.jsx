const Info = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  const startDateInfo = formatDate(event.event_date);
  const finishDateInfo = event.event_finish_date
    ? formatDate(event.event_finish_date)
    : null;

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <h2 className="text-xl font-semibold text-black text-center break-words">
        {event.title}
      </h2>

      <div className="flex flex-col items-center space-y-1 text-xs text-gray-500 mt-4">
        <p>📍 {event.location}</p>

        {finishDateInfo ? (
          <p>
            🗓️ {startDateInfo.date} - {finishDateInfo.date}
          </p>
        ) : (
          <p>🗓️ {startDateInfo.date}</p>
        )}

        {finishDateInfo ? (
          <p>
            ⏰ {startDateInfo.time}
          </p>
        ) : (
          <p>⏰ {startDateInfo.time}</p>
        )}
      </div>
    </div>
  );
};

export default Info;
