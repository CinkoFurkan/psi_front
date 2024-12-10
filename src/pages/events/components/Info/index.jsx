const Info = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
  };

  const startDateInfo = formatDate(event.event_date);
  const finishDateInfo = event.event_finish_date
    ? formatDate(event.event_finish_date)
    : null;

  return (
    <>
      <h2 className="text-2xl font-semibold text-black break-words">{event.title}</h2>

      <div className="flex flex-col items-center space-y-1 text-sm text-gray-500">
        <p>📍 {event.location}</p>
        <p>
          📅 {startDateInfo.date} - {finishDateInfo?.date || "Ongoing"}
        </p>
        <p>
          ⏰ {startDateInfo.time} - {finishDateInfo?.time || "TBD"}
        </p>
      </div>
    </>
  );
};

export default Info;
