import React from "react";

function ForecastDays({
  apiDate,
  apiWeather,
  apiTemp,
  apiMaxTemp,
  apiMinTemp,
}) {
  return (
    <>
      <div className="py-4">
        <h1 className="text-gray-400 font-normal">
          Weather forecast for {apiDate}
        </h1>
        <h1 className="">
          <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
            Weather Description:{" "}
          </span>
          <span className="font-semibold cursor-pointer">{apiWeather}</span>
        </h1>

        <h1 className="">
          <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
            (Predicted) Current Temperature:{" "}
          </span>
          <span className="font-semibold cursor-pointer">{`${apiTemp}°C`}</span>
        </h1>
        <div className="flex items-center">
          <h1 className="">
            <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
              Min Temperature:
            </span>
            <span className="font-semibold cursor-pointer">{` ${apiMinTemp}°C`}</span>
          </h1>
        </div>
        <h1 className="">
          <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
            Max Temperature:{" "}
          </span>
          <span className="font-semibold cursor-pointer">{`${apiMaxTemp}°C`}</span>
        </h1>
      </div>
    </>
  );
}

export default ForecastDays;
