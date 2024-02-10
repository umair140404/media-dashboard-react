import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { roundIfDecimal } from "../util";

const HorizontalBar = ({ total, value, barColor }) => {
  const [animated, setAnimated] = useState(false);

  const percentage = Math.round((value / total) * 100);
  barColor = barColor || "blue-500";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 0); // Delay animation start

    return () => clearTimeout(timer);
  }, []);

  return (
    <Tooltip
      title={`${roundIfDecimal(value)} (${percentage}%)`}
      placement="top"
      arrow
      enterTouchDelay={0}
    >
      <div
        className={`relative h-6 w-full bg-gray-200 h-4 rounded-full overflow-hidden ${
          animated ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <div
          className={`h-full bg-${barColor} rounded-full ${
            animated ? "w-full" : "w-0"
          } transition-width duration-1000 ease-in-out`}
          style={{ width: `${animated ? percentage : 0}%` }}
        ></div>
      </div>
    </Tooltip>
  );
};

export default HorizontalBar;
