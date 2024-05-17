import { Box, Container, Typography } from "@mui/material";
import React, { memo } from "react";
import logo from "./../../assets/images/logo.png";
import FooterHeading from "./../FooterHeading/FooterHeading.jsx";
import { contactData, newsData, socialMediaHandles } from "../../utils/utils.jsx";
import FooterPageList from "../FooterPageList/FooterPageList.jsx";
import FooterNews from "../FooterNews/FooterNews.jsx";
import FooterContact from "../FooterContact/FooterContact.jsx";
import SocialIcon from "../SocialIcon/SocialIcon.jsx";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "white" }}>
      <Box
        maxWidth="75rem"
        sx={{
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr .5fr 1fr",
          },
          gap: "1.87rem",
          color: "secondary",
          padding: {
            xs: "2rem",
            lg: "7.5rem 0rem 7.5rem 3.5rem",
          },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ minWidth: { xs: 0, md: "16.87rem" } }}>
          <img src={logo}  alt={"agrios logo"} />
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: ".93rem",
              marginBottom: "1.25rem",
              mt:"10px"
            }}
            className="manRope500"
            variant="subtitle1"
          >
            Unlocking insights, shaping the future, empowering change—data science fuels innovation and drives limitless possibilities for students.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: ".625rem",
            }}
          >
            {socialMediaHandles.map((x, i) => (
            
              <SocialIcon key={i} src={x.src} alt={x.alt} link={""}/>
            ))}
          </Box>
        </Box>
        <Box sx={{ minWidth: { xs: "", md:"10rem", lg: "12.5rem" } }}>
          <FooterHeading text={"Explore"} />
          <FooterPageList />
        </Box>
        {/* <Box>
          <FooterHeading text={"News"} />
          <Box
            sx={{
              padding: {xs:0, md:"0 2.54rem 0 2.25rem" ,lg:"0 5.54rem 0 6.25rem"},
              minWidth: {
                xs: 0,
                lg: "12.25rem",
              },
            }}
          >
            {newsData.map((x, i) => (
              <Box
                key={i}
                sx={{
                  mb: "1.78rem",
                }}
              >
                <FooterNews news={x.news} date={x.date} />
              </Box>
            ))}
          </Box>
        </Box> */}
        <Box>
          <FooterHeading text={"Contact"} />
          <Box>
            {contactData.map((x, i) => (
              <Box key={i} sx={{mb:"1.25rem"}}>
                <FooterContact src={x.src}  text={x.text} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Footer);
