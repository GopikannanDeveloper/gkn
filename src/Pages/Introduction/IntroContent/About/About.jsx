import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const TechnicalSkills = [
    { id: "1", key: "Frontend", value: "React JS, Angular JS" },
    { id: "2", key: "State Management", value: "Redux, React Query" },
    { id: "3", key: "API Integration", value: "REST APIs" },
    { id: "4", key: "SaaS Development", value: "Responsive Web Applications" },
    { id: "5", key: "PWA Implementation", value: "VesselLog Project" },
    { id: "6", key: "CI/CD & Version Control", value: "Git, GitHub" },
    { id: "7", key: "Payment Integration", value: "Stripe" },
    {
      id: "8",
      key: "Mobile & Web",
      value: "Responsive Design for all screens",
    },
    { id: "9", key: "Deployment", value: "Netlify" },
    { id: "11", key: "Tools", value: "Vite, Bootstrap, Tailwind CSS" },
    {
      id: "12",
      key: "Programming Languages",
      value: "JavaScript, TypeScript",
    },
    { id: "13", key: "Database", value: "SQL, MySQL" }
  ];

  return (
    <div>
      <div>
        <span className="f-16 fw-800 text-white">About</span>
      </div>
      <div>
        <span className="f-13 fw-400">
          With over 2+ years of experience, I specialize in building scalable,
          responsive applications using modern web technologies. I excel in
          delivering solutions tailored to client needs, ensuring performance
          and usability. Strong in collaboration, problem-solving, and
          maintaining high-quality standards in every project.
        </span>
      </div>
      {!showMore && (
        <div className="d-flex justify-content-end">
          <span
            className="f-12 fw-400  see-more cursor-pointer d-flex  align-items-end "
            onClick={() => setShowMore(true)}
          >
            <span class="material-symbols-outlined f-12 fw-400">
              more_horiz
            </span>
            <span>see more</span>
          </span>
        </div>
      )}
      {showMore && (
        <>
          {TechnicalSkills.map((item) => (
            <ul key={item.id}>
              <li>
                <div className="d-flex flex-lg-row flex-column gap-2 mt-2 ">
                  <span className="fnt-showmore-key">{item.key}</span>
                  <span className="d-lg-block d-none">{":"}</span>
                  <span className="fnt-showmore-value">{item.value}</span>
                </div>
              </li>
            </ul>
          ))}
        </>
      )}
      {showMore && (
        <div className="d-flex justify-content-end">
          <span
            className="f-12 fw-400  see-more cursor-pointer d-flex  align-items-end "
            onClick={() => setShowMore(false)}
          >
            <span class="material-symbols-outlined f-12 fw-400">
              more_horiz
            </span>
            <span>see less</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
