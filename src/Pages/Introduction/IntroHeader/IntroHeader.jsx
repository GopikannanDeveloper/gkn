import React, { useState } from "react";
import ExploreBtn from "../../../Components/ExploreBtn";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../../Components/ModalComponent";
import ContactInfo from "./ContactInfo";
import useWindowSize from "../../../Hooks/useWindowSize";
import SwipeableEdgeDrawerHOC from "../../../Components/Drawer";
import ShareProfile from "./ShareProfile";

const IntroHeader = () => {
  const [show, setShow] = useState(false);
  const { isLaptop } = useWindowSize();
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
        <div className="text-primary-color d-flex flex-column flex-lg-row align-items-lg-center align-items-start justify-content-center justify-content-lg-start gap-2">
          <span>{`<> I am a Software Engineer </>`}</span>

          <span className="d-lg-inline d-none">&bull;</span>
          <div className="d-flex gap-1 align-items-center justify-content-center">
            <span
              className="cursor-pointer f-14 fw-400 "
              onClick={() => setShow(true)}
            >
              <u>View Contact info</u>
            </span>

            <span className="d-lg-inline d-none">&bull;</span>
            <ShareProfile />
          </div>
        </div>
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
