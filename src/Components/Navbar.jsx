import logo from "../assets/favicon.svg";
import github from "../assets/github.svg";
import day from "../assets/day.svg";
import night from "../assets/night.svg";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav
      className={`${props.modeTheme.mainColor} flex justify-between items-center h-16 w-full px-4 sm:px-8`}
    >
      <div className="logo-about flex justify-evenly sm:justify-between md:justify-between lg:justify-between xl:justify-between items-center w-1/2 sm:w-1/3 lg:w-1/5 h-full">
        <div className="logo flex justify-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 items-center h-full font-bold text-xl sm:text-2xl text-white cursor-pointer">
          <Link to="/">
            <img src={logo} alt="logo" className="h-6 sm:h-8" />
          </Link>
          <Link to="/">
            <p>TextUtils</p>
          </Link>
        </div>
        <div className="about text-xs flex justify-center items-center text-black sm:text-xl cursor-pointer">
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center h-full w-2/5 sm:w-1/3 lg:w-1/4">
        <a
          href="https://github.com/Muhammad-Tayyab-Awan/textUtilsReactApp.git"
          target="_blank"
          className="bg-orange-400 h-8 sm:h-10 w-2/5 sm:w-1/2 md:w-2/5 lg:w-1/2 xl:w-2/5 font-bold ring-2 ring-white rounded-3xl flex justify-center items-center gap-1 focus-visible:outline-none hover:bg-orange-500"
        >
          <img src={github} alt="github" className="h-3/4" />
          <span className="hidden sm:flex">GitHub</span>
        </a>
        <button className="bg-purple-500 h-6 sm:h-10 w-1/2 sm:w-1/3 ring-2 ring-white rounded-3xl flex justify-center items-center focus-visible:outline-none">
          <img
            src={day}
            alt="light"
            onClick={props.changeTheme}
            className={`h-full w-full ${
              props.theme === "light" && "bg-white"
            } rounded-full p-1`}
          />
          <img
            src={night}
            alt="dark"
            onClick={props.changeTheme}
            className={`h-full w-full ${
              props.theme === "dark" && "bg-white"
            } rounded-full p-1`}
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
