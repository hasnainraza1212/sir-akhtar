import { Box, Typography } from "@mui/material";
import React from "react";
const ServiceCarouselItem = ({ src, title, desc }) => {
  return (
      <Box >
        <img src={src} style={{ width: "100%", aspectRatio:"16/9", objectFit:"cover", borderRadius:"10px" }} alt="" />
        <Typography
          className="manRope800"
          sx={{
            color: "primary.main",
            fontSize: {
              lg: "30px",
              xs:"20px",
              sm:"25px",
            },
            lineHeight: {
              lg: "36px",
              xs: "30px",

            },
            m: { lg: "15px 0", xs:"10px 0" },
          }}
        >
          {title}
        </Typography>
        <Typography
          className="manRope500"
          sx={{ lineHeight: { lg: "36px", xs:"28px" }, fontSize: { xs: "16px" } }}
        >
          {desc}
        </Typography>
      </Box>
  );
};

export default ServiceCarouselItem;
