import { Box, Typography } from "@mui/material";
import React from "react";
import wheating from "./../../assets/images/wheating.png";
import servicesgreenbg from "./../../assets/images/servicesgreenbg.png";
import Button from "./../../Components/Button/Button";
import {
  serviceAccordian,
  servicesAgriculturalProductText,
  servicesProductCategoriesArray,
} from "../../utils/utils";
import ServiceCarousel from "../../Components/Carousel/ServiceCarousel";
import Accordian from "../../Components/Accordian/Accordian";
const Services = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        maxWidth: "1200px",
        p:{
          xs:"30px",
          sm:"40px",
          md:"80px 40px ",
          lg:"0"
        },
        m: { lg: "120px auto",
      },
      }}
    >
      <Box
        sx={{
          display: "flex",
          boxSizing: "inherit",
          flexDirection: {
            lg: "row",
            xs: "column-reverse",
          },
          gap: {lg:"30px"},
        }}
      >
        {/* flex child1 */}
        <Box
          sx={{
            flexBasis: {
              lg: "400px",
            },
            flexGrow: "1",
            flexShrink: "1",
          }}
        >
          <Box
            sx={{
              background: "#F8F7F0",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",

              },
              mb: {
                lg: "30px",
                xs:"18px"
              },
            }}
          >
            <Typography
              className="manRope800"
              sx={{
                color: "#1F1E17",
                fontSize: {
                  xs: "20px",
                },
                lineHeight: {
                  lg: "30px",
                },
                textAlign:{
                  xs:"center",
                  lg:"left"
                }
              }}
            >
              Categories
            </Typography>
            {servicesProductCategoriesArray.map((ele, index) => {
              return (
                <Typography
                  key={index}
                  className="manRope500"
                  sx={{
                    lineHeight: {
                      xs: "40px",
                    },
                    fontSize: {
                      xs: "16px",
                    },
                    color: "#878680",
                    textAlign:{
                      xs:"center",
                      lg:"left"
                    }
                  }}
                >
                  {ele.tab}
                </Typography>
              );
            })}
          </Box>
          {/*  child */}
          <Box
            sx={{
              background: `url(${servicesgreenbg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",

              },
            }}
          >
            <Typography
              className="manRope800"
              sx={{
                color: "white",
                textAlign: "center",
                fontWeight: {
                  xs: "20px",
                },
                lineHeight: {
                  xs: "30px",
                },
              }}
            >
              Need Help?
            </Typography>
            <Typography
              className="manRope500"
              sx={{
                lineHeight: {
                  xs: "40px",
                },
                mt: {
                  lg: "33px",
                },
                fontSize: {
                  xs: "16px",
                },
                color: "white",
                textAlign: "center",
              }}
            >
              Speak with a human to filling out a form? call corporate office
              and we will connect you with a team member help.
            </Typography>
            <Typography
              className="coveredBy400"
              sx={{
                lineHeight: {
                  xs: "67.5px",
                },
                fontSize: {
                  xs: "36px",
                },
                mb: {
                  xs: "10px",
                },
                color: "white",
                textAlign: "center",
              }}
            >
              +92 (000) -9630
            </Typography>
            <Button
              BgColor={"#EEC044"}
              hoverBgColor={"#f5bd25"}
              text="Start Shopping Now"
              link={"/shop"}
              fullWidth={true}
            />
          </Box>
        </Box>
        {/* flexchild2 */}
        <Box
          sx={{
            flexBasis: {
              lg: "800px",
            },
            flexGrow: "1",
            flexShrink: "1",
          }}
        >
          <img
            src={wheating}
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              aspectRatio: "16/9",
            }}
            alt="Wheat growing"
          />
          <Typography
            className="manRope800"
            sx={{
              color: "primary.main",
              mt: {
                xs: "15px",
              },
              fontSize: {
                lg: "40px",
                md:"35px",
                sm:"30px",
                xs:"27px"
              },
              lineHeight: { lg: "56px", md:"50px" , sm:"45px"},
            }}
          >
            Agriculture Products
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "18px"},
              p: { lg: "18px 0 54px 0", xs:"18px 0" },
            }}
          >
            {servicesAgriculturalProductText.map((x, index) => (
              <Typography
                key={index}
                className="manRope500"
                sx={{
                  color: "secondary.main",
                  lineHeight: {
                    lg: "30px",
                    md:"30px",
                    xs:"30px"
                  },
                  fontSize: {
                    lg: "16px",
                    md:"16px",
                    xs:"16px"
                  },
                }}
              >
                {x.text}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              overflowX: "auto",
              maxWidth: {
                lg:"800px"
              },
              m:{
                lg:"0",
                xs:"18px 0"
              },
              position: "relative",
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
              scrollSnapAlign: "center",
              cursor: "grab",
            }}
          >
            <ServiceCarousel loop={true} mousewheel={true} />
          </Box>
        </Box>
      </Box>
      <Box sx={{
        maxWidth:{
          lg:"800px"
        },
        mt:"50px",
        ml:"auto",
        display:"flex",
        flexDirection:"column",
        gap:"10px"

      }}>
        {serviceAccordian.map((x,i)=> <Accordian key={i} title={x.title} desc={x.desc}/>)}
       

      </Box>
    </Box>
  );
};

export default Services;
