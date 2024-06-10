import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  saveLocation,
  updateSearchValue,
} from "../../features/search/searchSlice";
import { saveGeoCode } from "../../features/geolocation/geolocationSlice";
import axios from "axios";

function SearchBar() {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const dispatch = useDispatch();

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const formSubmitHandler = () => {
    dispatch(updateSearchValue(city));
    dispatch(saveLocation(city));
    fetchGeolocation();
    setCity("");
  };

  const fetchGeolocation = async () => {
    if (city == "") {
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03e5d72c53b9053d6cdabc3a7ae3b0e4`
      )
      .then((results) => {
        if (results.data.cod == 200) {
          console.log(results.data.coord);
          dispatch(
            saveGeoCode({
              lat: results.data.coord.lat,
              lng: results.data.coord.lon,
            })
          );
          setLatitude(results.data.coord.lat);
          setLongitude(results.data.coord.lon);
        } else {
          setLatitude(null);
          setLongitude(null);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <>
      <div className="relative ml-10 flex w-60 lg:w-full lg:max-w-lg">
        <div className="relative">
          <MagnifyingGlassIcon
            className="pointer-events-none absolute top-2 left-5 h-6 w-6 text-gray-900 text-opacity-40 dark:text-gray-400"
            aria-hidden="true"
          />
          <input
            type="text"
            onChange={handleInput}
            value={city}
            placeholder="Search city..."
            className="w-full rounded-lg bg-neutral-50 py-2.5 pl-14 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder-gray-400 sm:text-sm"
          />
        </div>
        <button
          onClick={formSubmitHandler}
          className="ml-2 rounded-xl border border-slate-900 bg-blue-400 p-2 text-white"
        >
          Go
        </button>
      </div>
    </>
  );
}

export default SearchBar;
