import "./App.css";
import * as React from "react";
import FixedBottomNavigation from "./component/bottom-nav";
import Home from "./component/home";
import video2 from "./lib/img/video_2.mov";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>광훈♡희연 결혼식에 초대합니다.</title>
        <meta property="og:title" content="광훈♡희연 결혼식에 초대합니다."></meta>
        <meta property="og:image" content="./lib/img/gallary/pic_8.jpg"></meta>
        <meta property="og:description" content="2022.10.08(토) 오전 11시 더리버사이드호텔 LL층 노벨라홀" />
      </Helmet>
      <Home></Home>
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
