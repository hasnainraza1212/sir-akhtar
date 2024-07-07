import * as React from "react";
import { Box, FormControl, OutlinedInput, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import {
  headerIcons,
  tabsArray,
} from "../../utils/utils.jsx";
import BreadCrum from "../BreadCrum/BreadCrum.jsx";
import AuthDrawer from "../AuthDrawer/AuthDrawer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice.js";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice.js";
const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state?.auth)
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [value, setValue] = React.useState(0);
  const [input, setInput] = React.useState("")
  const [openAuthForm, setOpenAuthForm] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlenavigate = (link) => {
    navigate(link);
  };
  React.useEffect(()=>{
 const ind = tabsArray.findIndex(tab=>tab.link===pathname)
 if(ind !== -1){
  return setValue(ind)
 }
  },[pathname])

  const showCrumbs = ()=>{
    if(location.pathname !== "/" && location.pathname !== "/profile"){
      return <BreadCrum/>
    }
  }
  const cb=(id)=>{
    if(id==="unauthenticated"){
     return setOpenAuthForm(true)
    }
    if(id==="authenticated"){
      return navigate("/profile")
    }
    
    if(id==="logout"){
      dispatch(handleSnackAlert({
        open:true,
        severity:"success",
        message:"Logout successfully"
    }))

      dispatch(handleAuth({
        username:null, email:null, phoneVerificationStatus:null, emailVerificationStatus:null, _id:null, type:null, accessToken:null, refreshToken:null,authenticated:false}))
      if(pathname!=="/"){
        navigate("/")

      }
    
    }

    if(pathname?.toLowerCase().includes("news")){
           dispatch(upateNewsCards(""))
      return dispatch(upateNewsCards(input))
      
    }

    if(pathname?.toLowerCase().includes("shop")){
      dispatch(updateProductsCards(""))
      return dispatch(updateProductsCards(input))
    }

  }
  const headerIconsConditionallyRender = headerIcons.filter(item=>item.condition(auth))

  return (
    <Box sx={{ width: "100%" }}>
   
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position:"relative",
          minHeight: {
            md:"79px"
          },
        }}
      >
        <Box sx={{display:{xs:"none", md:"block"}}}>
          <Tabs
            className={"headerTab"}
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            {tabsArray.map((tab, index) => (
              <Tab
                className={value === index ? "manRope800" : "manRope700"}
                onClick={() => {
                  handlenavigate(tab.link);
                }}
                key={index}
                label={tab.tabName}
                sx={{
                  color: value === index ? "primary.main" : "secondary.main",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid  #E4E2D7",
                minHeight: "36px",
                alignItems: "center",
                display:{xs:"none", md:"block"}

              }}
              className={"inputBox"}
            >
              <FormControl sx={{ mr: 1 }}>
                <OutlinedInput
                onChange={(e)=>{setInput(e.target.value)}}
                placeholder="Search..."
                value={input}
                  sx={{
                    color: "secondary.main",
                    maxHeight: "36px",
                  }}
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                position:{
                xs:"absolute",
                md:"relative"
                },
                top:{xs:"20px", md:"5px"},
                right:"20px",
                display: "flex",
                gap:{md:"30px"},
                padding:{
                  md:"0 30px"
                },
                alignItems:"center"
              }}
            >
              {headerIconsConditionallyRender.map((x, i) => {
                return <HeaderIcon cb={cb} key={i} id={x.id}component={x.icon} />
                })}
            </Box>
          </Box>
        </Box>
      </Box>
      {showCrumbs()}
      <AuthDrawer open={openAuthForm} handleClose={()=>{setOpenAuthForm(false)}} handleOpen={()=>{setOpenAuthForm(true)}}/>
    </Box>
  );
};

export default React.memo(Header);
