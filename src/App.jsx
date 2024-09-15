import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TextUtils from "./Components/TextUtils";
import About from "./Components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let [theme, setTheme] = useState("light");
  let [themeStyle, setThemeStyle] = useState({
    mainColor: "bg-teal-400",
    bodyColor: "bg-teal-100",
    textColor: "black"
  });
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      setThemeStyle({
        mainColor: "bg-gray-400",
        bodyColor: "bg-gray-600",
        textColor: "white"
      });
    } else {
      setTheme("light");
      setThemeStyle({
        mainColor: "bg-teal-400",
        bodyColor: "bg-teal-100",
        textColor: "black"
      });
    }
  }
  return (
    <Router basename="/textUtilsReactApp">
      <Navbar theme={theme} changeTheme={changeTheme} modeTheme={themeStyle} />
      <div
        className={`${themeStyle.bodyColor} bg-[linear-gradient(to_right,#fff2_1px,transparent_1px),linear-gradient(to_bottom,#fff2_1px,transparent_1px)] bg-[size:6rem_4rem]`}
      >
        <Routes>
          <Route
            path="/"
            element={<TextUtils textColor={themeStyle.textColor} />}
          />
          <Route
            path="/about"
            element={<About textColor={themeStyle.textColor} />}
          />
        </Routes>
      </div>
      <Footer modeTheme={themeStyle} />
    </Router>
  );
}

export default App;
