import React from "react";
import ExploreBtn from "../../../Components/ExploreBtn";
import { useNavigate } from "react-router-dom";

const IntroHeader = () => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/projects")
  }
  return (
    <div style={{zIndex:1000}}>
      <div className="d-flex flex-column gap-2 align-content-center">
        <span className="hello-fnt text-primary-color">
          Hello, Explore this !
        </span>
        <span className="text-primary-color">{`<> I am a Software Developer </>`}</span>
      </div>
      <div className="mt-3 mb-3" >
        <ExploreBtn btnLabel="Explore Projects" onClick={handleClick} />
      </div>
    </div>
  );
};

export default IntroHeader;
