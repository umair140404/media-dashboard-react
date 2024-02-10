import React from "react";

const SingleDate = ({ monthYear, day, date }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-accent text-xl font-bold mb-2">{monthYear}</p>
      <p className="text-gray-100 font-bold text-4xl mb-2">{day}</p>
      <p className="text-movies font-bold text-6xl">{date}</p>
    </div>
  );
};

export default SingleDate;
