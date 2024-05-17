import React, { useEffect, useMemo } from "react";
import hero from "./../../assets/images/hero.png";
import v from "./../../assets/images/v.png";
import bg from "./../../assets/images/bg.jpg";
import cube from "./../../assets/images/cube.jpg";
import studySpace from "./../../assets/images/studyspace.png";
import featureManAndFlower from "./../../assets/images/featureManAndFlower.png";
import featureTrackter from "./../../assets/images/featureTrackter.png";
import { Box, Typography } from "@mui/material";
import Button from "../../Components/Button/Button";
import goldLeaf from "./../../assets/images/goldLeaf.png";
import playIcon from "./../../assets/images/playIcon.png";
import farmVideo1 from "./../../assets/videos/farmVideo1.mp4";
VideoBox;
import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import {
  featureCardData,
  featureCheckList,
  featuresIconHadings,
  healthyCards,
  products,
} from "../../utils/utils";
import TeaserBox from "../../Components/TeaserBox/TeaserBox";
import IconicHeading from "../../Components/IconicHeading/IconicHeading";
import ChecklistItem from "../../Components/ChecklistItem/ChecklistItem";
import Heading from "../../Components/Heading/Heading";
import Product from "../../Components/ProductCard/ProductCard";
import VeggiesCard from "../../Components/VeggiesCard/VeggiesCard";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import { useDispatch, useSelector } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import { addItemInCart } from "../../Redux/Slice/CartSlice/CartSlice";
import VideoBox from "../../Components/VideoBox/VideoBox";
const Home = () => {
  const snackAlert = useSelector((state) => state.snackAlert);
  let cart = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  const cb = (data) => {
    const existingItem = cart.some((item) => item?.id === data?.id);
    if (existingItem) {
      return dispatch(
        handleSnackAlert({
          open: true,
          severity: "error",
          message: `${data?.name} already added into cart.`,
        })
      );
    }
    dispatch(
      handleSnackAlert({
        open: true,
        severity: "success",
        message: `${data?.name} added to cart.`,
      })
    );
    let newItem = [data]?.map((item) => {
      const { src, ...rest } = item;
      return { ...rest, count: 1 };
    });
    // window?.localStorage?.setItem(
    //   "cart",
    //   JSON.stringify([...cart, ...newItem])
    // );
    dispatch(addItemInCart(...newItem));
  };

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
          {featureCardData.map((x, i) => (
            <Box
              key={i}
              sx={{
                flexBasis: {
                  lg: "390px",
                  md: "270px",
                  xs: "100%",
                  flexGrow: "1",
                  flexShrink: "1",
                },
                borderRadius: "10px",
              }}
            >
              <FeatureCard
                src={x.src}
                heading={x.heading}
                title={x.title}
                iconSrc={x.iconSrc}
              />
            </Box>
          ))}
        </Box>

        {/* intro */}
        {/* <Box
          sx={{
            maxWidth: "1200px",
            boxSizing: "border-box",
            padding: {
              lg: "106px 30px",
              xs: "50px 30px",
            },
            margin: "auto",
            display: "flex",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              flexBasis: {
                md: "50%",
              },
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <Box
              sx={{
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background: `url(${featureTrackter})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "50px",
                  left: "-30px",
                  border: "8px solid white",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: `url(${featureManAndFlower})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              flexBasis: {
                md: "50%",
                xs: "100%",
              },
            }}
          >
            <TeaserBox
              title="Our Introductions"
              heading="Agriculture & Organic Product Farm"
              subHeading="Agrios is the largest global organic farm."
              text="There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration in some form by injected humor or
              random word which don’t look even."
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
                m: {
                  md: "40px 0 35px 0",
                  xs: "30px 0 25px 0",
                },
                gap: "44px",
              }}
            >
              {featuresIconHadings.map((x, i) => (
                <IconicHeading heading={x.heading} src={x.src} key={i} />
              ))}
            </Box>
            {featureCheckList.map((x, i) => (
              <ChecklistItem text={x.text} src={x.src} key={i} />
            ))}
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
        </Box> */}
      </Box>

      {/* offering section */}
      <Box>
        {/* products */}
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
            {products.map((x, i) => (
              <Box
                key={i}
                sx={{
                  flexBasis:"320px",
                  flexGrow:"1", flexShrink:"0",
                 
                }}
              >
                <VideoBox
                  title="ECO-Friendly Products can be Made from Scratch"
                  icon={playIcon}
                  videoUri={farmVideo1}
                />
              </Box>
            ))}
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
          {healthyCards.map((x, i) => (
            <VeggiesCard
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
