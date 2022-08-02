import "./App.css";
import * as React from "react";
import FixedBottomNavigation from "./component/bottom-nav";
import Home from "./component/home";
import video2 from "./lib/img/video_2.mov";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  React.useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <Home></Home>
      {/* <FixedBottomNavigation /> */}
    </div>
  );
}

export default App;
