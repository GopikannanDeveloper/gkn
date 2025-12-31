import React from "react";
import Intro from "./Introduction";
import IntroFooter from "./Introduction/IntroFooter/IntroFooter";
import useWindowSize from "../Hooks/useWindowSize";
const MainPage = () => {
  const { isMobile } = useWindowSize();
  return (
    <>
      <div>
        <Intro />
      </div>
      <div className={`${isMobile && "intro-footer"}`}>
        <IntroFooter />
      </div>
    </>
  );
};

export default MainPage;
