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
      <LineChart
        series={[
          {
            data: totalList,
            label: "Total",
            area: true,
            yAxisKey: "rightAxisId",
          },
          { data: tvList, label: "TV", area: true },
          {
            data: moviesList,
            label: "Movies",
            area: true,
          },
        ]}
        xAxis={[{ data: xAxis, scaleType: "time" }]}
        yAxis={[{ id: "rightAxisId" }]}
        rightAxis="rightAxisId"
        colors={colorPalette[graphColor]}
        sx={{
          //change left yAxis label styles
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.4",
            fill: "#FFFFFF",
          },
          //change right yAxis label styles
          "& .MuiChartsAxis-right .MuiChartsAxis-tickLabel": {
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
