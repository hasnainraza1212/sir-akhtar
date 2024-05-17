import React from "react";
import farmer_projects from "./../../assets/images/farmer_projects.png";
import { Box, Typography } from "@mui/material";
import ProjectCardItem from "../../Components/ProjectCardItem/ProjectCardItem";
import { darkSocialMediaHandles, projectCard } from "../../utils/utils";
import Heading from "../../Components/Heading/Heading";
import SocialIcon from "./../../Components/SocialIcon/SocialIcon";
import ProjectCarousel from "../../Components/Carousel/ProjectCarousel";

const Projects = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        p: {
          lg: "120px 0px",
          xs: "20px 30px ",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            lg: "1200px",
            boxSizing: "border-box",
          },
          mx: "auto",
        }}
      >
        <img
          src={farmer_projects}
          style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
          alt={""}
        />
      </Box>
      <Box
        sx={{
          maxWidth: {
            lg: "1200px",
          },
          m: "auto",
          display: "flex",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          gap: "40px",
        }}
      >
        <Box
          sx={{
            flexBasis: { lg: "780px" },
            p: { lg: "40px 0", xs: "20px 0 0 0" },
          }}
        >
          <Typography
            className="manRope800"
            sx={{
              fontSize: {
                lg: "30px",
                xs: "24px",
                sm: "26px",
                md: "28px",
              },
              lineHeight: {
                lg: "42px",
                xs: "36px",
                sm: "38px",
                md: "40px",
              },
              color: "#1F1E17",
              mb: {
                xs: "10px",
              },
            }}
          >
            Healthy Food
          </Typography>
          <Typography
            className="manRope500"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#878680",
              mb: { xs: "10px" },
            }}
          >
            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </Typography>

          <Typography
            className="manRope800"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#1F1E17",
              mb: { xs: "10px" },
            }}
          >
            Biophilia is the idea that humans possess an innate tendency to seek
            connections with nature. The term translates
          </Typography>
          <Typography
            className="manRope500"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#878680",
              mb: { xs: "10px" },
            }}
          >
            The term translates When an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Aelltes port lacus quis enim var
            sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>

          <Typography
            className="manRope500"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#878680",
              mb: { xs: "10px" },
            }}
          >
            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. 
          </Typography>

          <Typography
            className="manRope800"
            sx={{
              fontSize: {
                lg: "26px",
                xs: "24px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#1F1E17",
              mb: { xs: "10px" },
            }}
          >
            Challenges
          </Typography>

          <Typography
            className="manRope800"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#1F1E17",
              mb: { xs: "10px" },
            }}
          >
            Nemo enim ipsam voluptatem quia voluptas. Accusamus et iusto odio
            dignissimos ducimus. Nam liberto tempore, cum soluta nobis est
            elidend. Accusamus et iusto odio dignissimos ducimus.
          </Typography>

          <Typography
            className="manRope500"
            sx={{
              fontSize: {
                lg: "16px",
                xs: "14px",
              },
              lineHeight: {
                lg: "30px",
                xs: "28px",
              },
              color: "#878680",
              mb: { xs: "10px" },
            }}
          >
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </Typography>
        </Box>
        <Box
          sx={{
            flexBasis: {
              lg: "400px",
              xs: "100%",
            },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: {
                lg: "sticky",
                xs: "",
              },
              mt: {
                lg: "50px",
                xs: "0",
              },
              top: "0px",
              right: {
                lg: "0px",
              },
              boxSizing: "border-box",
              textAlign: {
                lg: "left",
                xs: "center",
              },
              borderRadius: "10px",
              border: "5px solid #EEC044",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRightWidth: "0px",
              boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              p: { lg: "38px 60px", xs: "30px 0" },
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            {projectCard.map((x, i) => (
              <ProjectCardItem title={x.title} desc={x.desc} key={i} />
            ))}
            <Box sx={{display:"flex", gap:"20px", justifyContent:{xs:"space-around", sm:"center", lg:"start"}}}>
             { darkSocialMediaHandles.map((x,i)=><SocialIcon bgColor={"#F8F7F0"} src={x.src} alt={x.alt} link={x.link} key={i} />)}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* sec2 */}
      <Box sx={{ textAlign: "center" , p:{lg:"110px 0 50px 0", xs:"60px 0"}}}>
        <Heading
          subHeading={"Recently Completed"}
          heading={"Similar Projects"}
        />
      </Box>
      <Box sx={{
        maxWidth:"1400px", 
        m:"auto"
      }}>
       <ProjectCarousel loop={true} mousewheel={true}/>
      </Box>
    </Box>
  );
};

export default Projects;
