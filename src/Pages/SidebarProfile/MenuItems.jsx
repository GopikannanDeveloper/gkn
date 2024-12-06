import React from "react";

const MenuItems = () => {
  return (
    <>
      <span
        className="material-symbols-outlined"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMenu"
        aria-controls="offcanvasMenu"
      >
        menu
      </span>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasMenu"
        style={{ width: "100px" }}
        aria-labelledby="offcanvasMenuLabel"
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
          {/* <Profile /> */}
          ssd
        </div>
      </div>
    </>
  );
};

export default MenuItems;
