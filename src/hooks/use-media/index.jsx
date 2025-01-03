import { useEffect, useState } from "react";

export default function useMedia(width = 1024) {
  const [status, setStatus] = useState(
    window.matchMedia(`(max-width : ${width}px)`).matches,
  );

  useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width : ${width}px)`);
    const onChangeHandler = (e) => {
      setStatus(e.matches);
    };

    matchMedia.addEventListener("change", onChangeHandler);
  });

  return status;
}
