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
      className="text-primary-color cursor-pointer f-14 fw-400 d-flex align-items-center justify-content-center "
      onClick={handleShare}
    >
        <span className="d-lg-none d-block me-2">&bull;</span>
      <span className="material-symbols-outlined f-14 fw-400">share</span>
      <span className="ms-1">Share Portfolio Via...</span>
    </div>
  );
};

export default ShareProfile;
