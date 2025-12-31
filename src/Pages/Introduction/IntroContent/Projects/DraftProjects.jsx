import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import kirshi from "../../../../assets/kirshi_logo.svg";
import hcl from "../../../../assets/HCLTech.jpeg";
import ExploreBtn from "../../../../Components/ExploreBtn";
const DraftProjects = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/projects");
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  const draftProjects = [
    {
      project:
        "Becton Dickinson BD (Becton, Dickinson and Company) - Medical Product",
      duration: "Feb 2025 - Present",
      company: "HCL TECHNOLOGIES",
      About: `
        Admin Module: Manages hospital operations, staff, departments, patient records, and system settings with robust reporting tools.
        Doctor Module: Allows doctors to access patient records, schedule appointments, view test results, and manage treatment plans.
        Branch Login: Enables hospital branches to access localized data, manage resources, and coordinate with the main hospital system.
        Lab Module : Manages test orders, test packages, and report reviews. It allows lab technicians to process orders, add and track test packages, and review test results for accurate diagnostics.
        `,
      img: hcl,
    },
    {
      project: "Hospital Management System",
      duration: "Oct 2024 - Jan 2025",
      company: "KIRSHI TECHNOLOGIES AND CONSULTING PRIVATE LIMITED",
      About: `
        Admin Module: Manages hospital operations, staff, departments, patient records, and system settings with robust reporting tools.
        Doctor Module: Allows doctors to access patient records, schedule appointments, view test results, and manage treatment plans.
        Branch Login: Enables hospital branches to access localized data, manage resources, and coordinate with the main hospital system.
        Lab Module : Manages test orders, test packages, and report reviews. It allows lab technicians to process orders, add and track test packages, and review test results for accurate diagnostics.
        `,
      img: kirshi,
    },
  ];
  return (
    <div className="mb-5 mb-lg-0">
        <div className="mb-3">
          <span className="f-16 fw-800 text-white">Projects</span>
        </div>
        {draftProjects.map((j) => (
          <div
            key={j.id}
            className={`mb-4 ${isProjectsPage ? "card-body" : ""}`}
          >
            <div className="d-flex flex-column">
              <span className="fw-semibold">
                <span className="text-primary-color instituion-fnt">
                  {j.project}
                </span>
              </span>
              <span className="fw-400 f-14 text-grey-color">{j.duration}</span>
              <span className="fw-300 f-12 text-grey-color mt-3">
                <img
                  src={j.img}
                  width="30"
                  height="30"
                  style={{ backgroundColor: "white" }}
                />{" "}
                with {j.company}
              </span>
              {/* <span className="fw-300 f-12 text-grey-color mt-3">{j.About}</span> */}
            </div>
          </div>
        ))}
        <div className=" light-divider-line"></div>
        <div className="d-flex justify-content-center my-2">
          <ExploreBtn btnLabel="Show all projects " onClick={onClick} />
        </div>
    </div>
  );
};

export default DraftProjects;
