import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { JSONFileURL } from "../config";
import DigitalClock from "../components/DigitalClock";
import SingleDate from "../components/SingleDate";
import LatestStats from "../components/LatestStats";
import { getDateTime } from "../util";
import LineGraph from "../components/LineGraph";

export default function Home() {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [amPm, setAmPm] = useState(null);
  const [monthYear, setMonthYear] = useState(null);
  const [day, setDay] = useState(null);
  const [date, setDate] = useState(null);
  const [latestStats, setLatestStats] = useState(null);
  const [secondLatestStats, setSecondLatestStats] = useState(null);
  const [xAxis, setXAxis] = useState([]);
  const [tvNFilesY, setTvNFilesY] = useState([]);
  const [moviesNFilesY, setMoviesNFilesY] = useState([]);
  const [tvHoursY, setTvHoursY] = useState([]);
  const [moviesHoursY, setMoviesHoursY] = useState([]);
  const [tvSizeY, setTvSizeY] = useState([]);
  const [moviesSizeY, setMoviesSizeY] = useState([]);
  const [totalNFilesY, setTotalNFilesY] = useState([]);
  const [totalHoursY, setTotalHoursY] = useState([]);
  const [totalSizeY, setTotalSizeY] = useState([]);
  const graphColor = Math.floor(Math.random() * 3) + 1;

  const getFileData = async () => {
    try {
      // const response = await fetch(JSONFileURL + "?t=" + new Date().getTime());
      const response = await fetch(JSONFileURL);
      const responseData = await response.json();

      if (response.ok) {
        // ------ clock state ------
        const dateData = getDateTime(
          responseData[responseData.length - 1].time
        );

        setHour(dateData.hour);
        setMinute(dateData.minute);
        setAmPm(dateData.ampm);
        setMonthYear(`${dateData.month}, ${dateData.year}`);
        setDay(dateData.day);
        setDate(dateData.date);

        // ------ latest stats ------
        const latestStats = responseData[responseData.length - 1];
        setLatestStats(latestStats);
        const secondLatestStats = responseData[responseData.length - 2];
        setSecondLatestStats(secondLatestStats);

        // ------ graph data ------
        let xAxis = [];
        let tvNFilesY = [];
        let moviesNFilesY = [];
        let tvHoursY = [];
        let moviesHoursY = [];
        let tvSizeY = [];
        let moviesSizeY = [];
        let totalNFilesY = [];
        let totalHoursY = [];
        let totalSizeY = [];

        responseData.forEach((data) => {
          const date = new Date(data.time);
          xAxis.push(date);
          tvNFilesY.push(data.tv.n_files);
          moviesNFilesY.push(data.movies.n_files);
          tvHoursY.push(data.tv.hours);
          moviesHoursY.push(data.movies.hours);
          tvSizeY.push(data.tv.size);
          moviesSizeY.push(data.movies.size);
          totalNFilesY.push(data.tv.n_files + data.movies.n_files);
          totalHoursY.push(data.tv.hours + data.movies.hours);
          totalSizeY.push(data.tv.size + data.movies.size);
        });

        setXAxis(xAxis);
        setTvNFilesY(tvNFilesY);
        setMoviesNFilesY(moviesNFilesY);
        setTvHoursY(tvHoursY);
        setMoviesHoursY(moviesHoursY);
        setTvSizeY(tvSizeY);
        setMoviesSizeY(moviesSizeY);
        setTotalNFilesY(totalNFilesY);
        setTotalHoursY(totalHoursY);
        setTotalSizeY(totalSizeY);
      } else {
        console.error("Data Fetch Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFileData();
  }, []);

  return (
    <Layout>
      <div className="hidden bg-red-500 bg-blue-500 border-red-500"></div>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-4 gap-x-1 gap-y-1 p-4 landing-container min-h-[100vh]">
          <div className="w-2/5 left-item flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-100 text-center mt-auto">
              Umair's Home Media Server
            </h1>
            <div>
              <h3 className="text-accent mb-20 mt-20 text-xl text-center">
                Last updated at:
              </h3>
              <div className="flex items-center space-x-3">
                <div className="w-2/5">
                  <SingleDate monthYear={monthYear} day={day} date={date} />
                </div>
                <div className="w-3/5">
                  <DigitalClock hour={hour} minute={minute} amPm={amPm} />
                </div>
              </div>
            </div>
            <div className="mt-auto text-center">
              <div className="flex flex-col">
                <div>© Umair Yousaf</div>
                <div>Version 2.0</div>
              </div>
            </div>
          </div>
          <div className="w-3/5 right-item">
            <div className="grid h-full grid-cols-1 grid-rows-3 gap-4">
              <div className="p-4">
                {latestStats && (
                  <LatestStats
                    title={"Files"}
                    tvValue={latestStats.tv.n_files}
                    moviesValue={latestStats.movies.n_files}
                    oldTvValue={secondLatestStats.tv.n_files}
                    oldMovieValue={secondLatestStats.movies.n_files}
                  />
                )}
              </div>
              <div className="p-4">
                {latestStats && (
                  <LatestStats
                    title={"Hours"}
                    tvValue={latestStats.tv.hours}
                    moviesValue={latestStats.movies.hours}
                    oldTvValue={secondLatestStats.tv.hours}
                    oldMovieValue={secondLatestStats.movies.hours}
                  />
                )}
              </div>
              <div className="p-4">
                {latestStats && (
                  <LatestStats
                    title={"Size (GB)"}
                    tvValue={latestStats.tv.size}
                    moviesValue={latestStats.movies.size}
                    oldTvValue={secondLatestStats.tv.size}
                    oldMovieValue={secondLatestStats.movies.size}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[75vh] mt-20 mb-20 p-4">
          <LineGraph
            title={"Files vs Date"}
            totalList={totalNFilesY}
            tvList={tvNFilesY}
            moviesList={moviesNFilesY}
            xAxis={xAxis}
            graphColor={graphColor}
          />
        </div>
        <div className="h-[75vh] mt-20 mb-20 p-4">
          <LineGraph
            title={"Hours vs Date"}
            totalList={totalHoursY}
            tvList={tvHoursY}
            moviesList={moviesHoursY}
            xAxis={xAxis}
            graphColor={graphColor}
          />
        </div>
        <div className="h-[75vh] mt-20 mb-20 p-4">
          <LineGraph
            title={"Size (GB) vs Date"}
            totalList={totalSizeY}
            tvList={tvSizeY}
            moviesList={moviesSizeY}
            xAxis={xAxis}
            graphColor={graphColor}
          />
        </div>
      </div>
    </Layout>
  );
}
