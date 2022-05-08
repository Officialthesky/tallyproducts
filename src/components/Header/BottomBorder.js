import React from "react";

export default function BottomBorder({ display }) {
  return (
    <div
      style={{
        width: "100%",
        height: 3,
        backgroundColor: display ? "#3b81f6" : "transparent",
      }}
    />
  );
}
