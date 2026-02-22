import React from "react";

export default function AlertBanner({ message, type }) {
  const colors = {
    danger: "bg-red-600 text-white",
    warning: "bg-yellow-500 text-black",
  };
  return (
    <div className={`p-2 mb-2 rounded ${colors[type] || "bg-gray-500"}`}>
      {message}
    </div>
  );
}