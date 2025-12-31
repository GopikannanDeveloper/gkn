import React from "react";
const ShareProfile = () => {
  const handleShare = async () => {
    const portfolioUrl = "https://gopikannan-portfolio.netlify.app/";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Portfolio",
          text: "Check out my portfolio 👇",
          url: portfolioUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <div
      className="text-primary-color cursor-pointer d-inline-flex align-items-center mt-lg-0 mt-2"
      onClick={handleShare}
    >
      <span className="material-symbols-outlined">share</span>
      <span className="ms-1">Share Portfolio Via</span>
    </div>
  );
};

export default ShareProfile;
