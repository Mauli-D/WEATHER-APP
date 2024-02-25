import React from "react";
import { Routes, Route } from 'react-router-dom';

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Gandhinagar",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Bengaluru",
    },
    {
      id: 4,
      title: "Mahesana",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium text-white"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;