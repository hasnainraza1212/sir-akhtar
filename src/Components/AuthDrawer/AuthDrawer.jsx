import * as React from "react";
import Box from "@mui/material/Box";

import { Menu, MenuItem, Drawer as MuiDrawer, Typography } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Signup from "../SignUp/SignUp";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
const AuthDrawer = ({
  open = false,
  handleClose = () => {},
  handleOpen = () => {},
}) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = React.useState(false) 
  const [toggleAuthForms, setToggleAuthForms] = React.useState(false)
  const auth = useSelector((state) => state.auth);
  const handleDisbledCloseButton =()=>setIsDisabled(prev=>!prev)
  const toggleAuthForm = ()=>setToggleAuthForms(prev=>!prev)
  const [token, setToken] = React.useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = React.useState(false);
const handlereCaptcha=()=>{
  setRefreshReCaptcha(prev=>!prev)
}

const setTokenFunc = (getToken) => {
  setToken(getToken);
};
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
       <Signup closeAuthForm={handleClose} captchaToken={token} handlereCaptcha={handlereCaptcha}  toggleAuthForm={toggleAuthForm} cb={handleDisbledCloseButton}/>
        :
        <Login closeAuthForm={handleClose} captchaToken={token} handlereCaptcha={handlereCaptcha} toggleAuthForm={toggleAuthForm} cb={handleDisbledCloseButton}/>
        }
    </Box>
  );

  return (
    <div>
       {/* <GoogleReCaptchaProvider reCaptchaKey={"6Ld21-gpAAAAAILoc4ASgCJnJgKiHSogO20Ge83o"}>
          <GoogleReCaptcha
            className="google-recaptcha-custom-class"
            onVerify={setTokenFunc}
            refreshReCaptcha={refreshReCaptcha}
          />
        </GoogleReCaptchaProvider> */}
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

export default AuthDrawer;
