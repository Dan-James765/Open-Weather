import React from "react";
import ForecastDays from "./ForecastDays";

function ForecastHome({ api }) {
  // In the code below I have created a component that displays the forecast data. I made sure to create one component and pass in the
  // values to prevent duplication!
  return (
    <>
      <div className="px-10">
        <div className="shadow-xl h-max w-128 bg-white rounded p-5">
          <h1 className="text-gray-500 font-semibold">
            London Weather Forecast for the Next 5 Days
          </h1>
          <div className="pt-4">
            <ForecastDays
              apiDate={api && api.data.list[7].dt_txt}
              apiTemp={api && api.data.list[7].main.temp}
              apiMaxTemp={api && api.data.list[7].main.temp_max}
              apiMinTemp={api && api.data.list[31].main.temp_min}
              apiWeather={api && api.data.list[7].weather[0].description}
            />
            <ForecastDays
              apiDate={api && api.data.list[15].dt_txt}
              apiTemp={api && api.data.list[15].main.temp}
              apiMaxTemp={api && api.data.list[15].main.temp_max}
              apiMinTemp={api && api.data.list[31].main.temp_min}
              apiWeather={api && api.data.list[15].weather[0].description}
            />
            <ForecastDays
              apiDate={api && api.data.list[23].dt_txt}
              apiTemp={api && api.data.list[23].main.temp}
              apiMaxTemp={api && api.data.list[23].main.temp_max}
              apiMinTemp={api && api.data.list[31].main.temp_min}
              apiWeather={api && api.data.list[23].weather[0].description}
            />
            <ForecastDays
              apiDate={api && api.data.list[31].dt_txt}
              apiTemp={api && api.data.list[31].main.temp}
              apiMaxTemp={api && api.data.list[31].main.temp_max}
              apiMinTemp={api && api.data.list[31].main.temp_min}
              apiWeather={api && api.data.list[31].weather[0].description}
            />
            <ForecastDays
              apiDate={api && api.data.list[39].dt_txt}
              apiTemp={api && api.data.list[39].main.temp}
              apiMaxTemp={api && api.data.list[39].main.temp_max}
              apiMinTemp={api && api.data.list[31].main.temp_min}
              apiWeather={api && api.data.list[39].weather[0].description}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForecastHome;
