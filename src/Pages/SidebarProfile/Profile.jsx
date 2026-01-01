import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import gopi from "../../assets/gopi.jpeg";
import Skills from "./Skills";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Hcl from "../../assets/HCLTech.jpeg";
import useWindowSize from "../../Hooks/useWindowSize";
const Profile = () => {
  const { isLaptop } = useWindowSize();
  const [imgError, setImgError] = useState(false);
  const ResidenceDetails = [
    { id: "1", key: "Phone", value: "+91 99763 14640" },
    { id: "4", key: "Age", value: "23" },
  ];

  return (
    <>
      <div className="card box-shadow">
        <div className="card-header">
          <div className="d-flex justify-content-center">
            <Avatar alt="Gopi" src={gopi} sx={{ width: 80, height: 80 }} />
          </div>
          <div>
            <div className="text-center">
              <span className="fw-semibold text-primary-color">
                Gopikannan K
              </span>
            </div>
            <div className="text-center">
              <span className="text-grey-color">Software Engineer</span>
            </div>
            <div className="text-center">
              <span className="f-12 fw-400 text-grey-color">
                Sivagangai,TamilNadu
              </span>
            </div>
            <div className="d-flex gap-1 align-items-center justify-content-center mt-2">
              {Hcl && !imgError ? (
                <img
                  width="30"
                  height="30"
                  src={Hcl}
                  alt="img"
                  className="logo-img rounded"
                  style={{ backgroundColor: "white" }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <Avatar
                  sx={{
                    borderRadius: 0,
                    width: 48,
                    height: 48,
                    backgroundColor: "white",
                    color: "black",
                  }}
                  className="rounded"
                >
                  {"Hcl".charAt(0).toUpperCase()}
                </Avatar>
              )}
              <span className="text-grey-color f-12 fw-400">
                HCL Technologies .{" "}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`sidebar-card-body overflow-auto show-scrollbar p-2 ${
            isLaptop ? "profile-card-body" : "profile-mobile-card-body"
          }`}
        >
          <div className="d-flex flex-column gap-1">
            <span className="f-12 fw-700 text-white">Email</span>
            <span className="f-12 fw-400 text-grey-color d-flex align-items-center">
              <span>gopik.kumaresan@gmail.com</span>
            </span>
          </div>
          <div className="divider-line text-black-50"></div>
          {ResidenceDetails.map((item) => (
            <div key={item.id} className="d-flex justify-content-between">
              <span className=" text-white f-12 fw-700">{item.key}</span>
              <span className="f-12 fw-400 text-grey-color d-flex align-items-center">
                {item.value}
              </span>
            </div>
          ))}
          <div className="divider-line"></div>

          <Skills />
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center gap-2">
            <a
              className="d-flex align-items-center"
              target="_blank"
              tabIndex="-1"
              href="https://www.linkedin.com/in/gopikannan-k/"
            >
              <LinkedInIcon sx={{ color: "#ffffff" }} />
              <span className="text-grey-color text-decoration-none text-nowrap f-12 fw-400">
                linkedin.com/in/gopikannan-k/
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
