import React from "react";
import HorizontalBar from "./HorizontalBar";
import { roundIfDecimal } from "../util";
import Triangle from "./Triangle";
import Tooltip from "@mui/material/Tooltip";

const LatestStats = ({
  title,
  tvValue,
  moviesValue,
  oldTvValue,
  oldMovieValue,
}) => {
  const total = tvValue + moviesValue;
  const oldTotal = oldTvValue + oldMovieValue;

  const valueDiffPercentage = ((total - oldTotal) / oldTotal) * 100;
  const valueIncreased = valueDiffPercentage > 0;
  const triangleColor = valueIncreased ? "#00FF00" : "#FF0000";

  return (
    <div className="flex flex-col w-full">
      <div className="text-center mb-8 text-3xl text-gray-100 font-bold">
        {title}
      </div>
      <div className="flex flex-col w-full md:flex-row items-center">
        <div className="w-full md:w-9/12 md:mr-2">
          <div className="flex items-center h-8">
            <div className="w-2/12 md:w-1/12 font-bold text-white">TV</div>
            <div className="w-10/12 md:w-11/12 pr-2 pl-4">
              <HorizontalBar total={total} value={tvValue} barColor={"tv"} />
            </div>
          </div>
          <div className="flex items-center h-8">
            <div className="w-2/12 md:w-1/12 font-bold text-white">Movies</div>
            <div className="w-10/12 md:w-11/12 pr-2 pl-4">
              <HorizontalBar
                total={total}
                value={moviesValue}
                barColor={"movies"}
              />
            </div>
          </div>
        </div>
        <div className="w-3/5 md:w-3/12 md:ml-0 mt-2 md:mt-0">
          <Tooltip
            title={`Previous value: ${roundIfDecimal(oldTotal)}`}
            arrow
            enterTouchDelay={0}
          >
            <div className="flex items-center justify-center bg-secondary rounded h-16">
              <div className="text-2xl font-mono text-accent mr-5">
                {roundIfDecimal(total)}
              </div>
              <div>
                <Triangle
                  size={25}
                  color={triangleColor}
                  rotate={!valueIncreased}
                />
              </div>
              <div className="ml-2 text-white">
                {roundIfDecimal(valueDiffPercentage)}%
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default LatestStats;
