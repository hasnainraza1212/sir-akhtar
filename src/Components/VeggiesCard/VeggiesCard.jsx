import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button/Button'

const VeggiesCard = ({title="",heading="", src=""}) => {
  return (
    <Box
    sx={{
      background: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.4)), url(${src})`,
      backgroundPosition: "center",
      minHeight: "310px",
      borderRadius:{
        sm:"10px",
        xs:"0px"
      },
      maxWidth: "570px",
      minWidth:{
        lg:"570px",
        md:"400px",
        xs:"0px"
      },
      boxSizing:"border-box",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-around",
      alignItems:"start",
      padding:"45px 50px"
    }}
  >
    <Typography 
    className="manRope400"
    sx={{
      color:"white",
      lineHeight:"21px",
      fontSize:"14px",
      letterSpacing:"2px",
      marginBottom:"12px",
    }}>{title}</Typography>

    <Typography 
    className="coveredBy400"
    sx={{
      color:"white",
      lineHeight:"48px",
      fontSize:"50px",
      maxWidth:"350px",
      marginBottom:"30px"
    }}>{heading}</Typography>
    <Button
       link={"/shop"}
      text={"Learn More"}
      BgColor={"#ffffff"}
      hoverBgColor={"#f6fff5"}
      textColor="#1F1E17"
      hoverTextColor="#1F1E17"
    />
  </Box>
  )
}

export default VeggiesCard