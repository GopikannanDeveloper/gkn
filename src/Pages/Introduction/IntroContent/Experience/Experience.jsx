import React from "react";
import kirshi from "../../../../assets/kirshi_logo.svg"
import ond from "../../../../assets/ond_logo.jpg"
const Experience = () => {
  const jobExperience = [
    {
      id: "1",
      position: "Junior Software Engineer",
      company: "KIRSHI TECHNOLOGIES AND CONSULTING PRIVATE LIMITED · ",
      employmentType: "Full-time",
      duration: "Jun 2024 - Present",
      location: "Chennai, Tamil Nadu, India · Remote",
      img: kirshi,
    },
    {
      id: "2",
      position: "Associate Software Developer",
      company: "OneData Software Solutions  · ",
      employmentType: "Full-time",
      duration: "Aug 2023 - May 2024",
      location: "Coimbatore, Tamil Nadu, India · On-Site",
      img: ond,
    },
  ];

  return (
    <div>
      <div className='mb-3'>
        <span className="f-16 fw-800 text-white">Experience</span>
      </div>
      {jobExperience.map((j) => (
        <div key={j.id} className="d-flex gap-3 mb-3">
          <div>
            <img src={j.img} alt="img" className="logo-img" />
          </div>
          <div className="d-flex flex-column">
            <span className="fw-semibold text-primary-color">
              <span className="instituion-fnt">{j.company}</span>
              <span className="instituion-fnt">{j.employmentType}</span>
            </span>
            <span className="fw-400 f-14 text-primary-color">{j.position}</span>
            <span className="fw-300 f-14 text-grey-color">{j.duration}</span>
            <span className="fw-300 f-14 text-grey-color">{j.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
