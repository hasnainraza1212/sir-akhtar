import { Box, Typography } from "@mui/material";
import TeaserBox from "../../Components/TeaserBox/TeaserBox";
import Button from "../../Components/Button/Button";
import { AboutLinks, featureCheckList } from "../../utils/utils";
import ChecklistItem from "../../Components/ChecklistItem/ChecklistItem";
import traktor from "./../../assets/images/traktor.jpg";
import playIcon from "./../../assets/images/playIcon.png";
import farmVideo1 from "./../../assets/videos/farmVideo1.mp4";
import VideoBox from "../../Components/VideoBox/VideoBox";
import PageItem from "../../Components/PageItem/PageItem";
import AboutTestimonialBg from "./../../assets/images/AboutTestimonialBg.png";
import testimonial1 from "./../../assets/images/testimonial1.png";
import Testimonial from "../../Components/Testimonial/Testimonial";

const About = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            maxWidth: "1200px",
            boxSizing: "border-box",
            padding: {
              lg: "106px 30px",
              xs: "50px 30px",
            },
            margin: "auto",
            display: "flex",
            gap: "80px",
            height: "100%",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: {
                md: "50%",
                xs: "80%",
              },
              textAlign: "justify",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: {
                  md: "100%",
                  xs: "450px",
                  sm: "500px",
                },
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  minHeight: "100%",
                  borderRadius: "8px",
                  background: `url(${traktor})`,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "80%",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: {
                md: "50%",
                xs: "100%",
              },
            }}
          >
            <TeaserBox
              title="Get to Know Us"
              subHeading="There are many variations of passa of lorem available, but the majority have suffered alteration."
              heading="The Best Agriculture Market"
              text="There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration in some form by injected humor or
              random word which don’t look even."
            />
            <Box sx={{ mt: "20px" }}>
              {featureCheckList.map((x, i) => (
                <ChecklistItem text={x.text} src={x.src} key={i} />
              ))}
            </Box>

            <Box
              sx={{
                mt: {
                  md: "40px",
                  xs: "30px",
                },
              }}
            >
              <Button
                text={"Discover More"}
                BgColor={"#4BAF47"}
                hoverBgColor={"#47d742"}
                textColor="white"
                link={"/projects"}
              >
                Discover More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <VideoBox
        title="ECO-Friendly Products can be Made from Scratch"
        icon={playIcon}
        videoUri={farmVideo1}
      />
      <Box
        sx={{
          height: {
            md: "184px",
          },
          background: "#1F1E17",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flexBasis: "1200px",
            flexShrink: "1",
            boxSizing: "border-box",
            padding: "0 150px",
            display: {
              md: "flex",
              xs: "none",
            },
            justifyContent: "space-around",
          }}
        >
          {AboutLinks.map((x, i) => (
            <PageItem
              showleaf={false}
              key={i}
              pageName={x.name}
              link={x.link}
            />
          ))}
        </Box>
      </Box>

      {/* testimonials */}
      <Box
        sx={{
          boxSizing: "border-box",
          padding: "120px 0",
          background: `url(${AboutTestimonialBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          gap:{
            lg:"100px"
          },
          justifyContent: "center",
        }}
      >
        <Testimonial/>
        {/* <Testimonial/> */}

      </Box>
    </>
  );
};

export default About;
