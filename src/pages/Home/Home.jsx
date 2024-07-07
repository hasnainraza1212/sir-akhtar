import React, { useEffect } from "react";
import bg from "./../../assets/images/bg.jpg";
import cube from "./../../assets/images/cube.jpg";
import { Box, Typography } from "@mui/material";
import Button from "../../Components/Button/Button";
import {
  techCard,
} from "../../utils/utils";
import Heading from "../../Components/Heading/Heading";
import YoutubeCard from "../../Components/YoutubeCard/YoutubeCard";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import {  useSelector } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
const Home = () => {
  const snackAlert = useSelector((state) => state.snackAlert);
const auth = useSelector(state=>state.auth)
  useEffect(()=>{
console.log("auth", auth)
  },[])
  return (
    <Box>
      {/* Hero section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.8)), url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          boxSizing: "border-box",
          padding: {
            xs: "40px",
          },
          height: {
            lg: "810px",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              lg: "1200px",
            },
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Typography
            className="manRope400"
            sx={{
              color: "white",
              fontSize: {
                lg: "1rem",
                xs: ".8rem",
              },
              lineHeight: {
                lg: "1.87rem",
              },
            }}
            variant="p"
          >
            Welcome to Study Space
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              mt: {
                xs: "20px",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              className="coveredBy400"
              sx={{
                color: "white",
                fontSize: {
                  lg: "7.5rem",
                  xs: "3rem",
                },
                maxWidth: {
                  lg: "40.98rem",
                },
                lineHeight: {
                  lg: "110px",
                  xs: "1.3rem",
                },
                mt: "18px",
              }}
            >
              Data Science
            </Typography>
            <Typography
              variant="h1"
              className="coveredBy400"
              sx={{
                color: "#EEC044",
                fontSize: {
                  xs: "4rem",
                  lg: "7.5rem",
                },
                lineHeight: {
                  xs: "1.3rem",
                  lg: "110px",
                },
                mt: {
                  xs: "20px",
                },
              }}
            >
              &
            </Typography>
          </Box>
          <Typography
            className="coveredBy400"
            sx={{
              color: "white",
              fontSize: {
                lg: "7.5rem",
                xs: "3rem",
              },
              maxWidth: {
                lg: "40.98rem",
              },
              lineHeight: {
                lg: "110px",
                xs: "1.3",
              },
              mt: "18px",
            }}
            variant="subtitle1"
          >
            Data Analytics
          </Typography>
          <Typography
            className="manRope400"
            sx={{
              color: "white",
              fontSize: {
                lg: "1rem",
                xs: ".8rem",
              },
              lineHeight: {
                lg: "1.87rem",
                xs: "1.3rem",
              },
              maxWidth: {
                lg: "32.61rem",
              },
              mt: {
                xs: ".8rem",
                lg: "1.62rem",
              },
            }}
            variant="subtitle1"
          >
            Data science utilizes algorithms, statistics, and domain expertise
            to extract insights from data, driving informed decisions and
            innovation.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mb: {
                lg: "0px",
                md: "100px",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                lg: "center",
                xs: "start",
              },
              gap: "1.25rem",
              mt: "2.75rem",
            }}
          >
            <Button
              text="Explore Content"
              BgColor={"#ffffff"}
              hoverBgColor={"#f6fff5"}
              textColor="#1F1E17"
              hoverTextColor="#1F1E17"
              link={"/about"}
            />
          </Box>
        </Box>
      </Box>
      {/* Feature Section */}
      <Box>
        {/* cards */}
        <Box
          sx={{
            maxWidth: { md: "1200px", xs: "300px", sm: "450px" },

            boxSizing: "border-box",
            margin: "auto",
            padding: {
              md: "0 15px",
              xs: "15px",
            },
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            gap: "30px",
            justifyContent: "space-between",
            mt: {
              md: "-60px",
              xs: "0px",
            },
          }}
        >
       
        </Box>

      </Box>

      {/* offering section */}
      <Box>
        <Box
          sx={{
            maxWidth: "1200px",
            boxSizing: "border-box",
            padding: {
              lg: "106px 0px",
              xs: "50px 0px",
            },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Heading subHeading="Our Recently" heading="Added Videos" />
          </Box>
          <Box
            sx={{
              maxWidth: "1200px",
              m:"0 auto",
              mt: {
                md: "90px",
                xs: "50px",
              },
              boxSizing: "border-box",
              display: "flex",
              flexDirection: {
                sm: "row",
                xs: "column"
              },
                flexWrap: {
                  xs:"wrap",
                },
                gap: "50px",
            }}
          >
            
          </Box>
        </Box>
        {/* Healthy card */}
        <Box
          sx={{
            maxWidth: "1200px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: {
              md: "space-around",
              lg: "space-between",
            },
            alignItems: "center",
            gap: {
              md: "60px",
              xs: "30px",
            },
            flexDirection: {
              md: "row",
              xs: "column",
            },
            margin: "auto",
            position: "relative",
            marginBottom: {
              md: "-60px",
              xs: "50px",
            },
          }}
        >
          {techCard.map((x, i) => (
            <YoutubeCard
              src={x.src}
              title={x.title}
              heading={x.heading}
              key={i}
            />
          ))}
        </Box>
      </Box>

      {/*  */}
      <Box
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.9)), url(${cube})`,
          padding: {
            md: "140px",
            xs: "30px",
          },
        }}
      >
        <Typography
          className="manRope800"
          sx={{
            maxWidth: "850px",
            margin: "auto",
            lineHeight: {
              xs: "30px",
              md: "74px",
            },
            fontSize: {
              md: "60px",
              xs: "20px",
            },
            color: "white",
            textAlign: "center",
          }}
        >
          Explore, analyze, discover endless possibilities.
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            mt: {
              md: "45px",
              xs: "20px",
            },
          }}
        >
          <Button
            text={"Enroll Now"}
            BgColor={"#ffffff"}
            hoverBgColor={"#f6fff5"}
            textColor="#1F1E17"
            hoverTextColor="#1F1E17"
            link={"/shop"}
          ></Button>
        </Box>
      </Box>
      <SnackAlert
        severity={snackAlert.severity}
        message={snackAlert.message}
        handleClose={() => {
          dispatch(handleSnackAlert({ open: false }));
        }}
        open={snackAlert.open}
      />
    </Box>
  );
};

export default Home;
