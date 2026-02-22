import React from "react";

export default function SensorCard({ name, value, unit }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow text-white w-40">
      <h3 className="font-bold">{name}</h3>
      <p className="text-xl">{value} {unit}</p>
    </div>
  );
}