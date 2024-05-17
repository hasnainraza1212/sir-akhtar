import React, { memo } from "react";
import { Button as MUIButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Button = ({
  cb=()=>{},
  text = "click me",
  textColor = "white",
  BgColor = "red",
  hoverBgColor = "#c92525",
  hoverTextColor = "white",
  fullWidth=false,
  link="/",
  isNavigate=true
}) => {
  const navigate = useNavigate();
  const handleNavigate = ()=> isNavigate && navigate(link)
  return (
    <MUIButton
    fullWidth={fullWidth}
      onClick={()=>{return handleNavigate(),cb()} }
      className="manRope800"
      sx={{
        borderRadius: "0.62rem",
        minHeight: {
          xs: "3.5rem",
        },
        backgroundColor: BgColor,
        fontSize: {
          xs: "0.87rem",
        },
        lineHeight: "1.87rem",
        padding: {xs:"10px 15px", sm:"10px 24px"},
        color: textColor,
        "&:hover": { backgroundColor: hoverBgColor, color: hoverTextColor },
      }}
      variant="contained"
    >
      {text}
    </MUIButton>
  );
};

export default memo(Button);
