import React from "react";
import { copyToClipboard } from "../../Utils";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactInfo = () => {
  const contactDetails = [
    {
      id: "1",
      key: "Email",
      value: "gopik.kumaresan@gmail.com",
      copy: true,
      copyContent: "gopik.kumaresan@gmail.com",
      icon: "mail",
    },
    {
      id: "2",
      key: "Phone",
      value: "+91 99763 14640",
      copy: true,
      copyContent: "+91 99763 14640",
      icon: "call",
    },
    {
      id: "3",
      key: "Linkedin",
      value: "linkedin.com/in/gopikannan-k/",
      copy: true,
      icon2: <LinkedInIcon />,
      copyContent: "https://www.linkedin.com/in/gopikannan-k/",
    },
    {
      id: "4",
      key: "Address",
      value: "A.Thekkur,Sivagangai(Dt)-630201",
      icon: "contact_mail",
    },
  ];

  return (
    <div>
      {contactDetails.map((item) => (
        <div className="d-flex gap-4" key={item.id}>
          <div>
            {item.icon2 ? (
             item.icon2
            ) : (
              <span class="material-symbols-outlined">{item.icon}</span>
            )}
          </div>
          <div className="d-flex flex-column">
            <span className=" contact-key f-16 fw-500">{item.key}</span>
            <span className="f-12 fw-400 text-grey-color d-flex align-items-center">
              <span className="text-muted">{item.value}</span>
              {item.copy && (
                <span
                  class="material-symbols-outlined ms-1  copy-icon"
                  onClick={() => copyToClipboard(item.copyContent)}
                >
                  content_copy
                </span>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
