import React, { useRef, useEffect } from "react";

const DigitalClock = ({ hour, minute, amPm }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const spanElement = spanRef.current;
    if (spanElement) {
      const width = spanElement.offsetWidth;
      spanElement.style.height = `${width}px`;
    }
  }, [hour]);

  return (
    <div className="time flex">
      <span
        ref={spanRef}
        className="flex items-center justify-center flex-grow text-7xl mr-1 w-1/3 bg-white rounded text-primary font-mono hour"
      >
        {hour}
      </span>
      <span
        ref={spanRef}
        className="flex items-center justify-center flex-grow text-7xl mr-2 w-1/3 bg-white rounded text-primary font-mono minute"
      >
        {minute}
      </span>
      <span
        ref={spanRef}
        className="flex items-center justify-center flex-grow text-5xl w-1/3 bg-white rounded text-movies font-bold font-mono am-pm"
      >
        {amPm}
      </span>
    </div>
  );
};

export default DigitalClock;
