import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer as MuiDrawer, Typography } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import {  mobileRabsArray, tabsArray } from "../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthDrawer from "../AuthDrawer/AuthDrawer";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
const Drawer = () => {
  const [authForm , setAuthForm] = React.useState("")
  const [openAuthForm, setOpenAuthForm] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const [open, setOpen] = React.useState(false);
  // const cb=(id)=>{
  //   if(id==="unauthenticated"){
  //    return setOpenAuthForm(true)
  //   }
  //   if(id==="authenticated"){
  //     return navigate("/profile")
  //   }
    
  //   if(id==="logout"){
  //     dispatch(handleSnackAlert({
  //       open:true,
  //       severity:"success",
  //       message:"Logout successfully"
  //   }))

  //     dispatch(handleAuth({
  //       username:null, email:null, phoneVerificationStatus:null, emailVerificationStatus:null, _id:null, type:null, accessToken:null, refreshToken:null,authenticated:false}))
  //     if(pathname!=="/"){
  //       navigate("/")

  //     }
    
  //   }
  // }
  const auth = useSelector(state=>state.auth)


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
const handleOpenAuthForm=(formType)=>{
  setOpenAuthForm(true)
  if(formType==="login"){

    console.log("login")
    return setAuthForm(formType)
  }
  if(formType==="sign up"){
    console.log("sign up")
    return setAuthForm(formType)
  }
  if (formType ==="logout"){
    dispatch(handleSnackAlert({
      open:true,
      severity:"success",
      message:"Logout successfully"
  }))

    dispatch(handleAuth({
      username:null, email:null, phoneVerificationStatus:null, emailVerificationStatus:null, _id:null, type:null, accessToken:null, refreshToken:null,authenticated:false}))
  setOpenAuthForm(false)

    if(pathname!=="/"){
      navigate("/")

    }
  }

  return

}
  const DrawerList = (
    <Box className="manRope400" sx={{ width: 250, mt:"30px" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {tabsArray.map((x, index) => (
          <ListItem sx={{
            display:{
              md:"unset",
              xs:"none"
            }
          }}  onClick={()=>{navigate(x.link)}} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={x.tabName} />
            </ListItemButton>
          </ListItem>
        ))}
        {mobileRabsArray.filter(item=>{
          if(auth.authenticated){
            return item.tabName !=="login" && item.tabName !=="sign up" 
          }
          return item.tabName !=="logout"
        }).map((x, index) => (
          <ListItem sx={{
            display:{
              md:"none",
              xs:"unset"
            }
          }}  onClick={()=>{["login", "sign up", "logout"].includes(x.tabName)?handleOpenAuthForm(x.tabName): navigate(x.link)}} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={x.tabName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          minWidth: "",
          padding: "20px",
        }}
      >
        <CiMenuBurger
          style={{
            fontSize: "2rem",
            color: "green",
          }}
        />
      </Button>
      <MuiDrawer
      className="customDrawer"
        sx={{ position: "relative", display:{
          md:"none", xs:"unset"
        }}}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: "fit-content",
            position: "absolute",
            top: "10px",
            right: "20px",
          }}
          onClick={toggleDrawer(false)}
        >
          <IoCloseOutline style={{
            fontSize:"30px",
            color:"#1F1E17"
          }} />
        </Box>
        {DrawerList}
      {/* <Box sx={{
        position:"absolute",
        bottom:"10px",
        left:"30px"
      }}>
      {
        headerIconsConditionallyRender(auth, false, cb).map((item, index)=><div key={index}>{item.icon}</div>)
      }
       
      </Box> */}

      </MuiDrawer>
      <AuthDrawer authForm={authForm} open={openAuthForm} handleClose={()=>setOpenAuthForm(false)} />
    </div>
  );
};

export default React.memo(Drawer);
