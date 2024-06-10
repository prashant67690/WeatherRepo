import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./routes/Home";
import { useDispatch } from "react-redux";
import { saveGeoCode } from "../src/features/geolocation/geolocationSlice";
function App() {
  const dispatch = useDispatch();

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    function fxn() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude;
          let long = position.coords.longitude;
          setLat(latitude);
          setLng(long);
          console.log("hit");
        });
      }
    }
    fxn();
  }, []);

  useEffect(() => {
    if (lat !== 0 && lng !== 0) {
      dispatch(saveGeoCode({ lat, lng }));
    }
  }, [lat, lng, dispatch]);

  return (
    <>
      <div className="lg: container mx-auto px-6 md:px-0 lg:pr-10">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
