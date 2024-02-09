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
      <div className="flex w-full">
        <div className="w-9/12">
          <div className="flex items-center h-8">
            <div className="w-1/12 font-bold">TV</div>
            <div className="w-9/12 pr-2 pl-4">
              <HorizontalBar total={total} value={tvValue} barColor={"red"} />
            </div>
            <div className="w-2/12">
              <div className="text-accent text-center font-mono text-sm">
                {roundIfDecimal(tvValue)} ({Math.round((tvValue / total) * 100)}
                %)
              </div>
            </div>
          </div>
          <div className="flex items-center h-8">
            <div className="w-1/12 font-bold">Movies</div>
            <div className="w-9/12 pr-2 pl-4">
              <HorizontalBar
                total={total}
                value={moviesValue}
                barColor={"blue"}
              />
            </div>
            <div className="w-2/12">
              <div className="text-accent text-center font-mono text-sm">
                {roundIfDecimal(moviesValue)} (
                {Math.round((moviesValue / total) * 100)}
                %)
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 flex items-center justify-center bg-secondary rounded  ml-2">
          <div className="text-2xl font-mono text-accent mr-5">
            {roundIfDecimal(total)}
          </div>
          <Tooltip title={`Previous value: ${roundIfDecimal(oldTotal)}`}>
            <div>
              <Triangle
                size={25}
                color={triangleColor}
                rotate={!valueIncreased}
              />
            </div>
          </Tooltip>
          <Tooltip title={`Previous value: ${roundIfDecimal(oldTotal)}`}>
            <div className="ml-2">{roundIfDecimal(valueDiffPercentage)}%</div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default LatestStats;
