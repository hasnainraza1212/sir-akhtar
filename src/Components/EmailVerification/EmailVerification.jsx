import React from "react";
import { Box, Typography } from "@mui/material";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import Button from "../Button/Button";
import useAxios from "../../API/useAxios/useAxios";

function EmailVerification({ isEmailVerified }) {
  const axiosInstance = useAxios()
  const dispatch = useDispatch()
  const handleEmail = async () => {
    const response = await axiosInstance.post(`/api/auth/send-verification-mail`);
    console.log(response)
    dispatch(handleSnackAlert({ open: true, message: "Verification Email sent successfully", severity: "success" }))

  }
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
              color: "#eec044",
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
          {isEmailVerified ? "Email Verification Completed" : "Email Verification"}
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
          {isEmailVerified ? "Thanks for verifying your email,  You'll be redirected to content page please wait for a while" : " Please check your email for the verification link you signed in with to continue."}
        </Typography>
    {    !isEmailVerified  && <Box sx={{
      mt:"20px"
    }}>
      <Button
          cb={handleEmail}
          text="Resend email"
          textColor="black"
          BgColor="#ffffff"
          hoverBgColor="#f6fff5"
          hoverTextColor="black"
          fullWidth={false}
          link="/"
          isNavigate={false} /></Box>}
      </Box>
    </Box>
  );
}

export default EmailVerification;
