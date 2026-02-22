import React, { useState, useEffect } from "react";
import AlertBanner from "../components/AlertBanner";
import SensorCard from "../components/SensorCard";
import ThermalGrid from "../components/ThermalGrid";

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [sensors, setSensors] = useState({
    temperature: 25,
    humidity: 50,
    smoke: 0,
    co: 0,
    voc: 0,
  });
  const [thermalData, setThermalData] = useState(Array(64).fill(20));

  useEffect(() => {
    const interval = setInterval(() => {
      const newSensors = {
        temperature: (20 + Math.random() * 15).toFixed(1),
        humidity: (40 + Math.random() * 20).toFixed(1),
        smoke: (Math.random() * 10).toFixed(1),
        co: (Math.random() * 5).toFixed(1),
        voc: (Math.random() * 500).toFixed(0),
      };
      setSensors(newSensors);

      const newAlerts = [];
      if (newSensors.smoke > 5)
        newAlerts.push({ message: "Smoke detected!", type: "danger" });
      if (newSensors.co > 3)
        newAlerts.push({ message: "High CO levels!", type: "warning" });
      setAlerts(newAlerts);

      setThermalData(Array.from({ length: 64 }, () => 20 + Math.random() * 40));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl text-white font-bold mb-4">
        Fire Detection Dashboard
      </h1>

      {/* Alerts */}
      {alerts.map((a, i) => (
        <AlertBanner key={i} {...a} />
      ))}

      {/* Sensor Cards */}
      <div className="flex gap-4 flex-wrap mt-4">
        <SensorCard name="Temperature" value={sensors.temperature} unit="°C" />
        <SensorCard name="Humidity" value={sensors.humidity} unit="%" />
        <SensorCard name="Smoke" value={sensors.smoke} unit="ppm" />
        <SensorCard name="CO" value={sensors.co} unit="ppm" />
        <SensorCard name="VOC" value={sensors.voc} unit="ppb" />
      </div>

      {/* Thermal Grid */}
      <div className="mt-6">
        <h2 className="text-white font-bold mb-2">Thermal Imaging</h2>
        <ThermalGrid data={thermalData} />
      </div>
    </div>
  );
}