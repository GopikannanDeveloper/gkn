import { Chip } from "@mui/material";
import React from "react";

const skillSections = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Angular JS",
      "Redux",
      "React Query",
    ],
  },
  {
    title: "Backend",
    skills: ["REST API", "SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub","Netlify"],
  },
];

const Skills = () => {
  return (
    <>
      <div className="mb-3">
        <span className="f-12 fw-700 text-white">Areas of Expertise</span>
      </div>

      {skillSections.map((section, index) => (
        <div key={index} className="mb-3">
          <div className="mb-2">
            <span className="f-11 fw-600 text-secondary">
              {section.title}
            </span>
          </div>

          <div className="d-flex gap-2 flex-wrap">
            {section.skills.map((skill, idx) => (
              <Chip
                key={idx}
                label={skill}
                sx={{
                  color: "#959595",
                  fontWeight: "bold",
                  backgroundColor: "#1a1a1a",
                  boxShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
