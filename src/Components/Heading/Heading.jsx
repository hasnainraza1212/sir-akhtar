import { Typography } from "@mui/material";
import React from "react";

const Heading = ({subHeading="", heading=""}) => {
  return (
    <>
      <Typography
        className="coveredBy400"
        sx={{
          color: "warning.main",
          lineHeight: "36px",
          fontSize: "24px",
        }}
      >
        {subHeading}
      </Typography>
      <Typography
        className="manRope800"
        sx={{
          color: "primary.main",
          lineHeight: "57px",
          fontSize: {
            md:"48px",
            xs:"40px"
          },
        }}
      >
        {heading}
      </Typography>
    </>
  );
};

export default Heading;
