import { Box } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { handleSnackAlert } from '../../Redux/Slice/SnackAlertSlice/SnackAlertSlice';
const VerifyPhone = () => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch()

  const auth = useSelector(state=>state.auth)
  const { phoneVerificationStatus, emailVerificationStatus } = auth
  
  if(phoneVerificationStatus && !emailVerificationStatus){
    return <Navigate to="/verify-email"/>
  }
  if(phoneVerificationStatus && emailVerificationStatus){
    return <Navigate to="/courses"/>
  }

  if(!auth.authenticated){
    dispatch(handleSnackAlert({ open: true, message: "You're not Authorized, Login first.", severity: "error" }))

    return <Navigate to="/"/>
  }
  return (
    <Box sx={{
        background:"black"
    }}>
      <Box sx={{
        maxWidth:"1200px",
        m:"0 auto",
        display:"grid",
        placeContent:"center",
        padding:{
          xs:"20px"
         }
      }}>

      <OtpInput
      
      inputStyle={{
        width:"50px",
        height:"50px",
        border:"1px solid white",
        outline:"none",
        background:"black",
        borderRadius:"10px",
        color:"white",
        fontSize:"20px",
        fontFamily:"Manrope",
        fontWeight:500,
        marginRight:"10px"
      }}
      shouldAutoFocus={true}
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />

      </Box>
      </Box>
  )
}

export default VerifyPhone