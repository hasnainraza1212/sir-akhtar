import React, { useEffect, useMemo, useState } from "react";
import {
  DetailedNewsFactCard,
  NewsCards,
  darkSocialMediaHandles,
  newsInputs,
  servicesProductCategoriesArray,
} from "../../utils/utils";
import {  useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NewsCardUserDetails from "../../Components/NewsCardUserDetails/NewsCardUserDetails";
import Button from "../../Components/Button/Button";
import user from "./../../assets/images/user.png";
import SocialIcon from "../../Components/SocialIcon/SocialIcon";
import Checkbox from "@mui/material/Checkbox";
import Input from "../../Components/Input/Input";
import Dialog from "../../Components/Dialog/Dialog";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
const label = { inputProps: { "aria-label": "Checkbox for save details" } };
const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    WebkitBoxShadow: " 0 0 6px rgba(0,0,0,.3)",
    background: "#d7d7d7",
  },
};
const DetailedNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const localFormData = useMemo(
    () => JSON.parse(window?.localStorage?.getItem("commentFormData")) ?? {},
    [JSON.parse(window?.localStorage?.getItem("commentFormData"))]
  );
  const [isChecked, setIsChecked] = useState(false);
  const [dialogData, setDialogData] = useState({
    actionBTNColor: "",
    actionText: "",
    title: "",
    actionBTNHoverColor: "",
  });
  const [snackAlertData, setSnackAlertData] = useState({
    message: "",
    severity: "success",
  });
  const [open, setOpen] = useState(false);
  const [openSnackAlert, setOpenSnackAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: localFormData?.name,
    email: localFormData?.email,
    comment: "",
  });
  const id = useMemo(
    () => +location?.pathname?.split("/")?.filter((x) => x !== "")[1],
    [location?.pathname]
  );

  const data = useMemo(
    () => NewsCards?.find((x) => x.newsId == id),
    [location.pathname]
  );
  if (!data) {
    return <>No News Found.</>;
  }
  const handleNewsNavigate = (newsId) => () => {
    if (id === newsId) {
      return;
    }
    navigate(`/news/${newsId}`);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((perv) => ({ ...perv, [name]: value }));
    setIsChecked(false)
  };
  const handlePost = () => {
    console.log(formData);
  };
  const removeDataFromLocally = () => {
    window?.localStorage.removeItem("commentFormData");
    setSnackAlertData({
      message: "Data unsaved.",
      severity: "success",
    });
   setFormData({
      name: "",
      email: "",
    });
    setOpenSnackAlert(true);
    setIsChecked(false)
  };

  
  const handleSaveFormLocally = () => {
    if (isChecked) {
      setOpen(true);
      setDialogData({
        actionText: "Unsave",
        actionBTNColor: "red",
        actionBTNHoverColor: "#d50505",
        title: "Are you sure to unsave your data?",
      });

      return setIsChecked(false);
    }
    for (let key in formData) {
      if (key !== "comment" && !formData[key]) {
        setSnackAlertData({
          message: "Full Name and Email requierd.",
          severity: "error",
        });
        setOpenSnackAlert(true);
        return;
      }
    }
    window?.localStorage.setItem("commentFormData", JSON.stringify(formData));
    setSnackAlertData({
      message: "Data saved.",
      severity: "success",
    });
    setOpenSnackAlert(true);
    setIsChecked(true);
  };
  useEffect(() => {
    for(let key in localFormData){
      if(key!=="comment"&& localFormData[key]){
        setIsChecked(true)
      }
    }
  }, []);
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
      {/* main */}
      <Box
        sx={{
          maxWidth: {
            lg: "1200px",
          },
          m: "auto",
          alignItems: {
            lg: "start",
          },
          display: "flex",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          gap: "40px",
        }}
      >
        {/* child1 */}
        <Box
          sx={{
            flexBasis: { lg: "780px" },
          }}
        >
          <img
            src={data?.src}
            style={{
              width: "100%",
              borderRadius: "10px",
              aspectRatio: "16/8",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
            alt={""}
          />
          <Box sx={{ mt: "40px" }}>
            <NewsCardUserDetails
              name={data.name}
              count={data.count}
              postionX={"start"}
            />
          </Box>
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
              m: {
                xs: "10px 0",
              },
            }}
          >
            {data.text}
          </Typography>
          {data?.desc?.map((x, i) => (
            <Typography
              key={i}
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
                mb: { xs: "30px" },
              }}
            >
              {x.desc}
            </Typography>
          ))}
        </Box>
        {/* child2 */}
        <Box
          sx={{
            display: "flex",
            boxSizing: "border-box",
            flexWrap: "wrap",
            gap: {
              xs: "30px",
            },
            alignItems: {
              xs: "stretch", // Default value for xs
              sm: "start", // alignItems start for sm
              md: "start", // alignItems start for md
              lg: "stretch", // Stretch to take available space for lg
            },
            flexDirection: {
              xs: "column",
              sm: "row",
              lg: "column",
            },
            flexBasis: {
              lg: "400px",
              xs: "100%",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              ...scrollbarStyles,
              flexBasis: {
                xs: "100%",
                sm: "100%",
                lg: "100%",
              },
              borderRadius: "10px",
              flexGrow: "1",
              flexShrink: "1",
              background: "#F8F7F0",
              maxHeight: {
                xs: "600px",
                sm: "700px",
                lg: "500px",
              },
              overflowY: "scroll", // Use auto to enable scrolling when content overflows
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",
              },
              mb: {
                lg: "30px",
                xs: "18px",
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
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              Latest News
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: "21px",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {NewsCards.map((ele, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      p: "20px",
                      cursor: "pointer",
                      boxShadow:
                        id == ele.newsId
                          ? "rgba(0, 0, 0, 0.1) 0px 4px 12px"
                          : "",
                      boxSizing: "border-box",
                      background: "white",
                      display: "flex",
                      alignItems: "start",
                      flexDirection: {
                        xs: "column",
                        lg: "row",
                      },

                      // flexWrap: { lg: "nowrap", xs: "wrap" },
                      gap: "20px",
                      borderRadius: "10px",
                    }}
                    onClick={handleNewsNavigate(ele.newsId)}
                  >
                    <Box
                      sx={{
                        flexBasis: {
                          lg: "80px",
                        },
                        borderRadius: "10px",
                        flexGrow: "1",
                        alignSelf: {
                          xs: "stretch",
                          lg: "start",
                        },
                      }}
                    >
                      <img
                        src={ele.src}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
                          borderRadius: "10px",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Box sx={{ display: "flex", gap: "8px" }}>
                        <img
                          src={user}
                          style={{ width: "20px", height: "20px" }}
                          alt=""
                        />
                        <Typography
                          className="manRope600"
                          sx={{
                            fontSize: "14px",
                            color: "secondary.main",
                            lineHeight: "20px",
                          }}
                        >
                          by {ele.name}
                        </Typography>
                      </Box>
                      <Typography
                        className="manRope800"
                        sx={{
                          flexGrow: "1",
                          flexShrink: "1",
                          fontSize: "14px",
                          color: "primary.main",
                          lineHeight: "26px",
                        }}
                      >
                        {ele?.text?.slice(0, 40)
                          ? ele?.text?.slice(0, 30) + "..."
                          : ""}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "45%",
                lg: "100%",
              },
              flexGrow: "1",
              flexShrink: "1",
              background: "#F8F7F0",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",
              },
              mb: {
                lg: "30px",
                xs: "18px",
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
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
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
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                    mt: "11px",
                  }}
                >
                  {ele.tab}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "45%",
                lg: "100%",
              },
              flexGrow: "1",
              flexShrink: "1",
              background: "#F8F7F0",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",
              },
              mb: {
                lg: "30px",
                xs: "18px",
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
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
                mb: "21px",
              }}
            >
              Tags
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: {
                  xs: "center",
                  sm: "space-evenly",
                  md: "center",
                  lg: "start",
                },
                gap: "10px",
                boxSizing: "border-box",
                alignItems: "start",
              }}
            >
              {data?.tags?.map((x, index) => {
                return (
                  <Button
                    key={index}
                    textColor="primary.main"
                    BgColor="white"
                    hoverBgColor="white"
                    hoverTextColor="primary.main"
                    text={x}
                    isNavigate={false}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "1200px", m: "auto" }}>
        <Box
          sx={{
            maxWidth: "800px",
            borderTop: 1,
            borderColor: "#ECE7E2",
            p: "30px 0",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              flexDirection: { xs: "column", sm: "row" },

              justifyContent: "space-between",
              gap: { xs: "50px", sm: "20px" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "17px" }}>
              <Typography
                className="manRope800"
                sx={{ lineHeight: "40px", fontSize: "16px" }}
              >
                Tags
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: {
                      xs: "center",
                      sm: "space-evenly",
                      md: "center",
                      lg: "start",
                    },
                    gap: "10px",
                    boxSizing: "border-box",
                    alignItems: "start",
                  }}
                >
                  {data?.tags?.map((x, index) => {
                    if (index < 2) {
                      return (
                        <Button
                          isNavigate={false}
                          key={index}
                          BgColor={"#4BAF47"}
                          hoverBgColor={"#47d742"}
                          textColor="white"
                          text={x}
                        />
                      );
                    } else {
                      return null; // Return null for elements beyond the first two
                    }
                  })}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: {
                  xs: "space-around",
                  sm: "center",
                  lg: "start",
                },
              }}
            >
              {darkSocialMediaHandles.map((x, i) => (
                <SocialIcon
                  bgColor={"#F8F7F0"}
                  src={x.src}
                  alt={x.alt}
                  link={x.link}
                  key={i}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: "30px",
              gap: "30px",
            }}
          >
            {DetailedNewsFactCard?.map((x, i) => (
              <Box
                key={i}
                sx={{
                  flexBasis: "200px",
                  flexGrow: "1",
                  flexShrink: "1",
                  background: "#F8F7F0",
                  borderRadius: "10px",
                  p: { xs: "30px", md: "50px" },
                  boxSizing: "border-box",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  className="manRope800"
                  sx={{ lineHeight: "33px", fontSize: "20" }}
                >
                  {x.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              mt: "47px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              className="manRope800"
              sx={{ lineHeight: "32px", fontSize: "26px" }}
            >
              Leave a Comment
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "start", md: "center" },
                flexWrap: { md: "wrap" },
                gap: "3px",
                flexDirection: { xs: "column-reverse", md: "row" },
              }}
            >
              <Checkbox
                onChange={handleSaveFormLocally}
                checked={isChecked}
                {...label}
                sx={{
                  p: "0",
                  ml: "-3px",
                  color: "#878680",
                  "&.Mui-checked": {
                    color: "green",
                  },
                }}
              />
              <Typography
                className="manRope600"
                sx={{
                  lineHeight: "30px",
                  fontSize: "16px",
                  color: "secondary.main",
                }}
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </Typography>
            </Box>
          </Box>
          <form noValidate autoComplete="on">
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                boxSizing: "border-box",
                mt: "5px",
                flexWrap: "wrap",
              }}
            >
              {newsInputs.map((x, i) => (
                <Box
                  key={i}
                  sx={{
                    flexBasis: "370px",
                    flexGrow: "1",
                    flexShrink: "1",
                  }}
                >
                  <Input
                    cb={handleInputChange}
                    placeholder={x?.placeholder}
                    name={x.name}
                    // value ={handleFormValue(formData.name)}
                    value={formData[x.name]}
                    defaultValue={x?.defaultValue}
                    fullWidth={true}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: "30px" }}>
              <Input
                cb={handleInputChange}
                placeholder="Write Comment"
                minRows={8}
                multiline={true}
                fullWidth={true}
                name={"comment"}
              />
            </Box>
            <Box sx={{ mt: "30px" }}>
              <Button
                cb={handlePost}
                text="Post Comment"
                textColor="white"
                BgColor={"#4BAF47"}
                hoverBgColor={"#47d742"}
                hoverTextColor="white"
                fullWidth={false}
                isNavigate={false}
              />
            </Box>
          </form>
        </Box>
      </Box>
      <Dialog
        cb={removeDataFromLocally}
        title={dialogData.title}
        actionText={dialogData.actionText}
        actionBTNColor={dialogData.actionBTNColor}
        actionBTNHoverColor={dialogData.actionBTNHoverColor}
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
      <SnackAlert
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        duration={5000}
        severity={snackAlertData.severity}
        message={snackAlertData.message}
        open={openSnackAlert}
        handleClose={() => {
          setOpenSnackAlert(false);
        }}
      />
    </Box>
  );
};

export default DetailedNews;
