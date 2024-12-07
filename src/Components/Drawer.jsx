import React from "react";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "bootstrap"; // Ensure Bootstrap is correctly imported and used

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const SwipeableEdgeDrawerHOC = ({ title, drawerContent, show, setShow }) => {
  const toggleDrawer = (newOpen) => {
    setShow(newOpen);
  };

  return (
    <Root>
      <SwipeableDrawer
        anchor="bottom"
        open={show}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            backgroundColor: "background.paper",
          }}
        >
          <Puller />
        </StyledBox>
        <div className="p-2">
          <div className="d-flex justify-content-between modal-header" style={{width:"100%"}}>
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={()=>setShow(false)}/>
          </div>
        </div>
        <hr/>
        <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          {drawerContent}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default SwipeableEdgeDrawerHOC;
