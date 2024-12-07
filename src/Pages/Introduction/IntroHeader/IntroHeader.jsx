import React, { useState } from "react";
import ExploreBtn from "../../../Components/ExploreBtn";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../../Components/ModalComponent";
import ContactInfo from "./ContactInfo";
import useWindowSize from "../../../Hooks/useWindowSize";
import SwipeableEdgeDrawerHOC from "../../../Components/Drawer";

const IntroHeader = () => {
  const [show, setShow] = useState(false);
  const { isLaptop } = useWindowSize();
  console.log(show, "show");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };
  return (
    <div style={{ zIndex: 1000 }}>
      <div className="d-flex flex-column gap-2 align-content-center">
        <span className="hello-fnt text-primary-color">
          Hello, Explore this !
        </span>
        <span className="text-primary-color d-flex align-items-center ">
          <span>{`<> I am a Software Developer </>`}</span>
          <span className="ms-2"> &bull; </span>
          <span className="ms-2 cursor-pointer" onClick={() => setShow(true)}>
            <u>Contact info</u>{" "}
          </span>
        </span>
      </div>
      <div className="mt-3 mb-3">
        <ExploreBtn btnLabel="Explore Projects" onClick={handleClick} />
      </div>
      {isLaptop ? (
        <ModalComponent
          title="Gopikannan K"
          show={show}
          body={<ContactInfo />}
          onClose={() => setShow(false)}
          classname="card-body"
        />
      ) : (
        <SwipeableEdgeDrawerHOC
          title="Gopikannan K"
          drawerContent={<ContactInfo />}
          show={show} // Pass the show state directly
          setShow={setShow}
        />
      )}
    </div>
  );
};

export default IntroHeader;
