import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

//Have exported the variable for testing
export const ApiTwo =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ae5409772dcb0d6da6caa429ae1e4f01&units=metric";
console.log(ApiTwo);
function CurrentHome({ api }) {
  const [apiTwo, setApiTwo] = useState("");

  //A useffect which will render the API data in on each load
  useEffect(() => {
    try {
      fetchApiFunction();
    } catch (error) {
      console.log("The API did not load properly");
    }
  }, []);

  //A function which fetches the API data
  const fetchApiFunction = async () => {
    const fetchApiTwo = await axios.get(ApiTwo);
    setApiTwo(fetchApiTwo);
  };

  //The data 'last updated' has been removed from the API, I tried quite a few end points but found that
  //this data is no longer a part of the API.

  return (
    <>
      <div className="px-10 pb-10">
        <div className="shadow h-96 w-96 bg-white rounded p-5">
          <h1 className="text-gray-500 font-semibold">London Weather Today</h1>
          <div className="pt-8">
            <h1 className="text-gray-400 font-normal">
              Weather forecast for {api && api.data.list[0].dt_txt}
            </h1>
            <h1 className="">
              <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
                Weather Description:{" "}
              </span>
              <span className="font-semibold cursor-pointer">
                {apiTwo && apiTwo.data.weather[0].description}
              </span>
            </h1>
            <h1 className="">
              <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
                Humidity:{" "}
              </span>
              <span className="font-semibold cursor-pointer">{`${
                apiTwo && apiTwo.data.main.humidity
              }%`}</span>
            </h1>
            <h1 className="">
              <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
                Current Temperature:{" "}
              </span>
              <span className="font-semibold cursor-pointer">{`${
                apiTwo && apiTwo.data.main.temp
              }°C`}</span>
            </h1>
            <h1 className="">
              <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
                Min Temperature:{" "}
              </span>
              <span className="font-semibold cursor-pointer">{`${
                apiTwo && apiTwo.data.main.temp_min
              }°C`}</span>
            </h1>
            <h1 className="">
              <span className="text-sky-500 cursor-pointer hover:text-sky-900 transition delay-110 ease-in-out">
                Max Temperature:{" "}
              </span>
              <span className="font-semibold cursor-pointer">{`${
                apiTwo && apiTwo.data.main.temp_max
              }°C`}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentHome;
