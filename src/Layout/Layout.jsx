import React from "react";
import Profile from "../Pages/SidebarProfile/Profile";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid mt-lg-3 mt-2">
      <div className="row gap-2 justify-content-around">
        <div className="col-3 d-lg-block d-none" >
          <Profile />
        </div>
        <div className="col-lg-8 col-12 app-card box-shadow">{children}</div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Profile />
        </div>
      </div>
      
    </div>
  );
};

export default Layout;
