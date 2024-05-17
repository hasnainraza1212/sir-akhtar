import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import testimonial1 from "./../../assets/images/testimonial1.png";
const Testimonial = () => {
  return (
    <Box
      sx={{
        m: { xs: "0 50px", sm: "0 100px", md: "0" },
        boxSizing: "border-box",
        padding: {
          xs: "30px",
          sm: "38px 52px 46px 120px",
        },
        background: "white",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          aspectRatio:"1/1",
          borderRadius: "10px",
          mb:"20px",
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <img
          style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
          src={testimonial1}
        />
      </Box>

      <Box
        sx={{
          width: {
            lg: "140px",
          },
          height: {
            lg: "183px",
          },
          display: {
            xs: "none",
            sm: "block",
          },
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: {
            md: "-70px",
            sm: "-50px",
          },
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            background: "#4BAF47",
            width: {
              sm: "50px",
            },
            height: {
              sm: "50px",
            },
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            right: {
              sm: "-25px",
            },
            transform: "translateY(-50%)",
          }}
        ></Box>
        <img
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            verticalAlign: "middle",
          }}
          src={testimonial1}
        />
      </Box>
      <Typography
        className="manRope400"
        sx={{
          color: "secondary.main",
          lineHeight: {
            lg: "36px",
            md: "34px",
            sm: "32px",
            xs: "28px",
          },
          fontSize: {
            lg: "18px",
            md: "18px",
            sm: "17px",
            xs: "16px",
          },
          width: {
            lg: "328px",
            md: "280px",
            sm: "100%",
            xs: "100%",
          },

        }}
      >
        There are many variations of passage of available but the majority have
        suffered alteration in some form by injected humor or randomed.
      </Typography>

      <Box
        sx={{
          mt: {
            lg: "16px",
            xs: "10px",
          },
        }}
      >
        <Typography
          className="manRope800"
          sx={{
            fontSize: {
              lg: "20px",
            },
            lineHeight: {
              lg: "26px",
            },
            color: "primary.main",
            textAlign: "right",
          }}
        >
          Bonnie Tolbet
        </Typography>

        <Typography
          className="manRope400"
          sx={{
            fontSize: {
              lg: "16px",
            },
            lineHeight: {
              lg: "26px",
            },
            color: "secondary.main",
            textAlign: "right",
          }}
        >
          Customer
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(Testimonial);
