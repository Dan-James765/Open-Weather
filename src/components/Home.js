import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentHome from "./CurrentHome";
import ForecastHome from "./ForecastHome";

export const API =
  "https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=ae5409772dcb0d6da6caa429ae1e4f01&units=metric";
function Home() {
  //UseState hook for managing the state of the API
  const [api, setApi] = useState("");

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
    const fetchAPI = await axios.get(API);
    console.log(fetchAPI);
    setApi(fetchAPI);
  };

  return (
    <>
      <div className="pt-10" data-testid="home-id">
        <CurrentHome api={api} />
        <ForecastHome api={api} />
      </div>
    </>
  );
}

export default Home;
