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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import zIndex from "@mui/material/styles/zIndex";
import inion from "./../../assets/images/onion.png";
import CartItem from "../CartItem/CartItem";
import Login from "../Login/Login";
import Signup from "../SignUp/SignUp";
const CartDrawer = ({
  open = false,
  handleClose = () => {},
  handleOpen = () => {},
}) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = React.useState(false) 
  const [toggleAuthForms, setToggleAuthForms] = React.useState(false)
  const data = useSelector((state) => state.cart);
  const handleDisbledCloseButton =()=>setIsDisabled(prev=>!prev)
  const toggleAuthForm = ()=>setToggleAuthForms(prev=>!prev)
  const DrawerList = (
    <Box
      sx={{
        width: "100vw",
        p: {
          md: "40px 80px",
          sm: "20px",
          xs: "0px",
        },
        position: "relative",
        background: "white",
        height: "100vh",
        boxSizing: "border-box",
        display:"grid",
        placeItems:"center"
      }}
      role="presentation"
    >
     
       {toggleAuthForms?
       <Signup  toggleAuthForm={toggleAuthForm} cb={handleDisbledCloseButton}/>
        :
        <Login toggleAuthForm={toggleAuthForm} cb={handleDisbledCloseButton}/>
        }
    </Box>
  );
  React.useEffect(()=>{

console.log(isDisabled)
  },[isDisabled])

  return (
    <div>
      <MuiDrawer
        anchor={"right"}
        sx={{ position: "relative" }}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: "fit-content",
            position: "absolute",
            zIndex: "1",
            top: {
              md: "50px",
              xs: "30px",
            },
            right: {
              md: "80px",
              xs: "20px",
            },
            cursor: "pointer",
            fontSize: {
              xs: "20px",
              sm: "30px",
              md: "30px",
            },
          }}
          onClick={handleClose}
        >
          {!isDisabled &&<IoCloseOutline
          
            style={{
              fontSize: "inherit",
              color: "#1F1E17",
            }}
          />}
        </Box>
        {DrawerList}
      </MuiDrawer>
    </div>
  );
};

export default CartDrawer;
