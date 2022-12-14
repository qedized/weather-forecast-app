import React from "react";
import { getDateTime, iconUrlFromCode } from "../services/weatherService";

function ForecastHourly({ weather: { hourly, timezone } }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-5">
        <p className="text-white font-medium uppercase">HOURLY FORECAST</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row items-center justify-between text-white">
        {hourly.slice(0, hourly.length - 1).map((hour) => (
          <div
            key={hour.dt}
            className="flex flex-col items-center justify-center w-24"
          >
            <p className="font-light text-sm">
              {getDateTime(hour.dt, timezone)}
            </p>
            <img
              src={iconUrlFromCode(hour.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{hour.temp.toFixed()}&deg;</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastHourly;
