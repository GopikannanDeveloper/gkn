import { Chip } from "@mui/material";
import React from "react";

const Skills = () => {
  const skills = [
    { id: "1", skill: "Html" },
    { id: "2", skill: "CSS" },
    { id: "3", skill: "Bootstrap" },
    { id: "4", skill: "Material UI" },
    { id: "5", skill: "Javascript" },
    { id: "6", skill: "Typescript" },
    { id: "7", skill: "React JS" },
    { id: "8", skill: "Redux" },
    { id: "9", skill: "React Query" },
    { id: "10", skill: "REST API" },
    { id: "11", skill: "Git" },
    { id: "12", skill: "GitHub" },
  ];
  return (
    <>
      <div className="mb-2">
        <span className="f-12 fw-700 text-white">Areas of Expertise</span>
      </div>
      <div className="d-flex gap-2 flex-wrap">
        {skills.map((s) => (
          <div key={s.id}>
            <Chip
              label={s.skill}
              sx={{
                color: "#959595",
                fontWeight: "bold",
                backgroundColor: "#1a1a1a",
                boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
