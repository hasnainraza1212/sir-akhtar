import { Box } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
const VerifyPhone = () => {
  const [otp, setOtp] = useState('');
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