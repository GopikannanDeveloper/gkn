import React from "react";
import tc from "../../../../assets/tc_logo.jpg";
import { Avatar } from "@mui/material";
const Education = () => {
  const education = [
    {
      id: "1",
      institution: "Thiagarajar College",
      degree: "Bachelor's degree, Computer Science",
      duration: "2020 - 2023",
      percentage: "72%",
      img: tc,
    },
    {
      id: "2",
      institution: "Baba Amir Badhusha Matriculation Higher Secondary School",
      degree: "Grade 10 & 12",
      percentage: "10th - 80.02% & 12th - 79.05%",
      duration: "2018 - 2020",
    },
  ];

  return (
    <div>
      <div className="mb-3">
        <span className="f-16 fw-800 text-white">Education</span>
      </div>
      {education.map((j) => (
        <div key={j.id} className="d-flex gap-2 mb-3">
          <div>
            {j.img ? (
              <img src={j.img} alt="img" className="logo-img rounded" />
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
                {j.institution.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </div>
          <div className="d-flex flex-column">
            <span className="fw-semibold">
              <span className="text-primary-color instituion-fnt">
                {j.institution}
              </span>
            </span>
            <span className="fw-400 f-14 text-grey-color">{j.degree}</span>
            <span className="fw-300 f-14 text-grey-color">{j.percentage}</span>
            <span className="fw-300 f-14 text-grey-color">{j.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
