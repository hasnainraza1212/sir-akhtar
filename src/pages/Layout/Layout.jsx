import React, { useEffect } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Box } from "@mui/material";
import Drawer from "../../Components/Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import useAxios from "../../API/useAxios/useAxios";
import { handleAuth } from "../../Redux/Slice/UserSlice/UserSlice";

const Layout = () => {
  const axiosInstance = useAxios()
  const auth = useSelector(state=>state?.auth)
  const {pathname}= useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const params = {
   _id: searchParams.get("_id"),
   username: searchParams.get("username"),
   emailVerificationStatus: searchParams.get("emailVerificationStatus")

  }

  // const {pathname} =location;
  const snackAlert = useSelector(state=> state?.snackAlert)
  const dispatch = useDispatch()
  const handleCloseSnackAlert=()=>{
    dispatch(handleSnackAlert( {
      open:false,
  }))
  }


  useEffect(()=>{
      (async()=>{
        if(!params?._id && !params?.username && !params?.emailVerificationStatus){
          const response = await axiosInstance.get("/api/auth/profile",{withCredentials:true})
          console.log(response?.data)
          dispatch(handleAuth(response?.data));
      }
      })()

  },[])
  return (
    <div className="layout">
      <Box
        sx={{
          position: "relative",
        }}
        className="header"
      >
        <Box
          sx={
            {
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            }
          }
        >
          <Header />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
            width: "100%",
          }}
        >
          <Box >  <Drawer /></Box>

        
        </Box>
      </Box>
      <div className="outlet">
        <Outlet />
      </div>
     { (pathname.includes("/content")&& !auth?.authenticated)? null:

      <Footer />}
      <SnackAlert open={snackAlert?.open} message={snackAlert.message} severity={snackAlert?.severity} handleClose={handleCloseSnackAlert}/>
    </div>
  );
};

export default Layout;
