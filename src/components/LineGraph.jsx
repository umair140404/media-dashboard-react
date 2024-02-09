import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  blueberryTwilightPalette,
  mangoFusionPalette,
  cheerfulFiestaPalette,
} from "@mui/x-charts/colorPalettes";

const LineGraph = ({
  title,
  totalList,
  tvList,
  moviesList,
  xAxis,
  graphColor,
}) => {
  const colorPalette = {
    1: blueberryTwilightPalette,
    2: mangoFusionPalette,
    3: cheerfulFiestaPalette,
  };

  return (
    <div className="h-full">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-100 mb-8">{title}</div>
      </div>
      <LineChart
        series={[
          { data: totalList, label: "Total", area: true },
          { data: tvList, label: "TV", area: true },
          { data: moviesList, label: "Movies", area: true },
        ]}
        xAxis={[{ data: xAxis, scaleType: "time" }]}
        colors={colorPalette[graphColor]}
        sx={{
          //change left yAxis label styles
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.4",
            fill: "#FFFFFF",
          },
          // change bottom label styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.5",
            fill: "#FFFFFF",
          },
          // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            stroke: "#FFFFFF",
            strokeWidth: 1.0,
          },
          // leftAxis Line Styles
          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            stroke: "#FFFFFF",
            strokeWidth: 1.0,
          },
        }}
        // legend color
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 14,
              fill: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
