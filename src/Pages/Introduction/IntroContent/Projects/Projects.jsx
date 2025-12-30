import React from "react";
import kirshi from "../../../../assets/kirshi_logo.svg";
import ond from "../../../../assets/ond_logo.jpg";
import hcl from "../../../../assets/HCLTech.jpeg";
import { useNavigate } from "react-router-dom";
const Projects = () => {
    const navigate = useNavigate()
  const projects = [
    {
      project: "Becton Dickinson BD (Becton, Dickinson and Company) - Medical Product",
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
      duration: "Oct 2024 - Present",
      company: "KIRSHI TECHNOLOGIES AND CONSULTING PRIVATE LIMITED",
      About: `
        Admin Module: Manages hospital operations, staff, departments, patient records, and system settings with robust reporting tools.
        Doctor Module: Allows doctors to access patient records, schedule appointments, view test results, and manage treatment plans.
        Branch Login: Enables hospital branches to access localized data, manage resources, and coordinate with the main hospital system.
        Lab Module : Manages test orders, test packages, and report reviews. It allows lab technicians to process orders, add and track test packages, and review test results for accurate diagnostics.
        `,
      img: kirshi,
    },
    {
      project: "Soulert Wellness",
      duration: "JUNE 2024 - NOV 2024",
      company: "KIRSHI TECHNOLOGIES AND CONSULTING PRIVATE LIMITED",
      About: `
         serves as a central hub for the wellness community, enabling wellness organizers to promote their services, events, and
         resources while allowing users to discover, engage, and connect with the wellness offerings that align with their interests and
         goals. 
        `,
      img: kirshi,
    },
    {
      project: "VesselLog",
      duration: "SEPT 2023 - JAN 2024",
      company: "OneData Software Solutions",
      About: ` The requirement for a complete solution to improve visitor management procedures and security protocols`,
      img: ond,
    },
    {
      project: "Coolocare",
      duration: "FEB 2024 - APR 2024",
      company: "OneData Software Solutions",
      About: ` Specialize in supporting older adults,individuals with disabilities,family caregivers,and residents in long-term care (LTC) facilities with meal
 reminders, medication reminders,courtesycalls, & friendly check-in with warm communications. Based on the Packages, Services has provided.`,
      img: ond,
    },
    {
      project: "Everity",
      duration: "APR 2024 - MAY 2024",
      company: "OneData Software Solutions",
      About: `Everity is the digital platform to assess, highlight, monitor and communicate the impact of industrial projects, according to the UN SDGs.`,
      img: ond,
    },
  ];
  return (
    <div style={{ height: "90vh", overflowY: "auto" }}>
      <div className="mb-3 d-flex align-items-center gap-2 ms-2 mt-2">
        <span class="material-symbols-outlined explore-button__icon-wrapper cursor-pointer" onClick={()=>navigate('/home')}>arrow_back</span>
        <span className="f-16 fw-800 text-white ms-2">Projects</span>
      </div>
      {projects.map((j) => (
        <div key={j.id} className="mb-3 card-body ">
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
    </div>
  );
};

export default Projects;
