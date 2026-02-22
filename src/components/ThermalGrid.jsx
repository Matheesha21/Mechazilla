import React from "react";

export default function ThermalGrid({ data }) {
  return (
    <div className="grid grid-cols-8 gap-1">
      {data.map((temp, i) => (
        <div
          key={i}
          className="w-8 h-8"
          style={{ backgroundColor: `rgba(255,0,0,${temp/60})` }}
        />
      ))}
    </div>
  );
}