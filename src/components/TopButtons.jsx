import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Toronto",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Istanbul",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white w-32 text-lg font-medium transition ease-out hover:scale-110"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
