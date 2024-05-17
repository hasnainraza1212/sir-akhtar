import React from "react";
import greenPhone from "./../../assets/images/greenPhone.png";
import { Box, Typography } from "@mui/material";
const ContactComponent = ({
  src = "",
  alt = "",
  title = "",
  subTitle = "",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap:"20px"
      }}
    >
      <Box>
        <img src={src} alt={alt} />
      </Box>

      <Box >
        <Typography
        className="manRope600"
        sx={{
            color:"secondary.main",
            fontSize:"12px",
            lineHeight:"20px"
        }}
        >{subTitle}</Typography>
        <Typography
        className="manRope700"
        sx={{
            color:"primary.main",
            fontSize:"14px",
            lineHeight:"20px"
        }}>{title}</Typography>
      </Box>
    </Box>
  );
};

export default ContactComponent;
