import WeatherCard from "../components/widgets/WeatherCard";
import AirPollution from "../components/widgets/AirPollution";
import SunsetSunrise from "../components/widgets/SunsetSunrise";
import Wind from "../components/widgets/Wind";
import UVIndex from "../components/widgets/UVIndex";
import Precipitation from "../components/widgets/Precipitation";
import FeelsLike from "../components/widgets/FeelsLike";
import Humidity from "../components/widgets/Humidity";
import Visibility from "../components/widgets/Visibility";
import Pressure from "../components/widgets/Pressure";

function Home() {
  return (
    <>
      <main className="container mx-auto ml-10">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 sm:p-0 md:w-1/3">
            <WeatherCard />
          </div>
          <div className="mt-4 md:mt-5 md:w-2/3">
            <div className="grid grid-cols-2 justify-items-center gap-4 px-6 md:grid-cols-3 lg:grid-cols-4">
              <div className="col-span-2 w-full">
                <AirPollution />
              </div>
              <SunsetSunrise />
              <Wind />
              <UVIndex />
              <Precipitation />
              <FeelsLike />
              <Humidity />
              <Visibility />
              <Pressure />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
