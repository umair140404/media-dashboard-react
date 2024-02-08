import React from "react";
import HorizontalBar from "./HorizontalBar";
import { roundIfDecimal } from "../util";

const LatestStats = ({ title, tvValue, moviesValue }) => {
  const total = tvValue + moviesValue;

  return (
    <div className="flex flex-col w-full">
      <div className="text-center mb-8 text-3xl text-gray-100 font-bold">
        {title}
      </div>
      <div className="flex w-full">
        <div className="w-10/12">
          <div className="flex items-center h-8">
            <div className="w-2/12 font-bold">TV</div>
            <div className="w-8/12">
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
            <div className="w-2/12 font-bold">Movies</div>
            <div className="w-8/12">
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
        <div className="w-2/12 bg-secondary rounded text-accent flex items-center justify-center text-3xl font-mono">
          {roundIfDecimal(total)}
        </div>
      </div>
    </div>
  );
};

export default LatestStats;
