import React from "react";
import { Box, Typography } from "@mui/material";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

function EmailVerification({ isEmailVerified }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        p: {
          xs: "2rem",
          lg: "7.5rem 0rem 0rem 0rem",
        },
        gap: {
          xs: "30px",
          lg: "30px",
        },
        backgroundColor: "#000000",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex" },

          fontSize: {
            xs: "40px",
            sm: "50px",
            md: "60px",
            lg: "70px",
          },
          color: "#ffffff",
        }}
      >
        {isEmailVerified ? (
          <FaRegCheckCircle
            style={{
              color:"#eec044",
              fontSize: "inherit",
            }}
          />
        ) : (
          <FaRegPaperPlane
            style={{
              fontSize: "inherit",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          textAlign: {
            xs: "center",
          },
        }}
      >
        <Typography
        className="manRope800"
          sx={{
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "40px",
              lg: "50px",
            },
            fontWeight: "bold",
          }}
          variant="h4"
          component="h1"
        >
         {isEmailVerified? "Email Verification Completed":"Email Verification" }
        </Typography>
        <Typography
        className="manRope600"

          sx={{
            fontSize: {
              xs: "15px",
              sm: "20px",
              md: "25px",
              lg: "30px",
            },
          }}
          variant="subtitle1"
        >
         {isEmailVerified?"Thanks for verifying your email,  You'll be redirected to content page please wait for a while":" Please check your email for the verification link you signed in with to continue."}
        </Typography>
      </Box>
    </Box>
  );
}

export default EmailVerification;
