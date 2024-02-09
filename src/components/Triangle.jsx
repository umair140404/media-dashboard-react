import React from "react";

const Triangle = ({ size, color, rotate }) => {
  const rotationStyle = rotate ? { transform: "rotate(180deg)" } : {};

  return (
    <div
      className="triangle"
      style={{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: `${size / 2}px`,
        borderRightWidth: `${size / 2}px`,
        borderBottomWidth: `${size}px`,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
        ...rotationStyle,
      }}
    ></div>
  );
};

export default Triangle;
