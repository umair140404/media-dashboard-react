import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { JSONFileURL } from "../config";
import DigitalClock from "../components/DigitalClock";
import SingleDate from "../components/SingleDate";
import LatestStats from "../components/LatestStats";
import { getDateTime } from "../util";

export default function Home() {
  const [data, setData] = useState([]);

  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [amPm, setAmPm] = useState(null);
  const [monthYear, setMonthYear] = useState(null);
  const [day, setDay] = useState(null);
  const [date, setDate] = useState(null);
  const [latestStats, setLatestStats] = useState(null);
  const [secondLatestStats, setSecondLatestStats] = useState(null);

  const getFileData = async () => {
    try {
      // const response = await fetch(JSONFileURL + "?t=" + new Date().getTime());
      const response = await fetch(JSONFileURL);
      const responseData = await response.json();

      console.log("response", response);

      if (response.ok) {
        setData(responseData);

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
      <div className="hidden bg-red-500 bg-blue-500"></div>
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
                  />
                )}
              </div>
              <div className="p-4">
                {latestStats && (
                  <LatestStats
                    title={"Hours"}
                    tvValue={latestStats.tv.hours}
                    moviesValue={latestStats.movies.hours}
                  />
                )}
              </div>
              <div className="p-4">
                {latestStats && (
                  <LatestStats
                    title={"Size (GB)"}
                    tvValue={latestStats.tv.size}
                    moviesValue={latestStats.movies.size}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-100">graph 1</div>
        <div className="bg-amber-100">graph 2</div>
        <div className="bg-gray-100">graph 3</div>
      </div>
    </Layout>
  );
}
