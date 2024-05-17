import * as React from "react";
import { Dialog as MUIDIALOG } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "../Button/Button";
const Dialog = ({
  open = false,
  actionText = "cancel",
  actionBTNHoverColor = "",
  cb = () => {},
  actionBTNColor = "black",
  handleClose = () => {},
  title = "",
}) => {
  const dialogFn=()=>{
    handleClose()
    cb()
  }
  return (
    <MUIDIALOG
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="customMuiDialog"
    >
      <DialogTitle sx={{ color: "secondary.main" }} id="alert-dialog-title">
        {title}
      </DialogTitle>

      <DialogActions
        sx={{
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Button
          cb={dialogFn}
          text={actionText}
          textColor="white"
          BgColor={actionBTNColor}
          hoverBgColor={actionBTNHoverColor}
          hoverTextColor="white"
          fullWidth={false}
          isNavigate={false}
        />
        <Button
          cb={handleClose}
          text="Cancel"
          textColor="white"
          BgColor="black"
          hoverBgColor="black"
          hoverTextColor="white"
          fullWidth={false}
          isNavigate={false}
        />
      </DialogActions>
    </MUIDIALOG>
  );
};

export default Dialog;
