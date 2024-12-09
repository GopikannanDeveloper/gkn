import React from "react";
import Intro from "./Introduction";
import IntroFooter from "./Introduction/IntroFooter/IntroFooter";
const MainPage = () => {
  return (
    <div>
      <Intro />
      <div style={{zIndex:1000 }}>
        <IntroFooter />
      </div>
    </div>
  );
};

export default MainPage;
