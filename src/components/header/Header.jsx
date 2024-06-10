import Location from "./Location";
import SearchBar from "./SearchBar";
import ThemeSwitchToggle from "./ThemeSwitchToggle";
import Weather from "../../assets/weather.png";

function Header() {
  return (
    <>
      <div className="ml-8 flex justify-between lg:border-b-2">
        <div className="flex justify-center p-1">
          <img className="h-15 w-20 p-3" src={Weather} alt="Logo" />
          <p className="flex flex-col justify-center font-bold text-blue-500 lg:ml-2 lg:text-2xl">
            Weather App
          </p>
        </div>
        <nav className="my-4 flex items-center justify-between gap-4 pr-6">
          <SearchBar />
          <div className="invisible md:visible">
            <Location />
          </div>
          <div className="invisible md:visible">
            <ThemeSwitchToggle />
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
