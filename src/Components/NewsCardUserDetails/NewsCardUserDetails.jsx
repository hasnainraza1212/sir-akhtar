import { Box, Typography } from '@mui/material'
import React from 'react'
import user from "./../../assets/images/user.png"
import chat from "./../../assets/images/chat.png"
const NewsCardUserDetails = ({name="Annonymous", count=1, postionX="center"}) => {
  return (
    <Box sx={{ display:"flex",gap:"20px", justifyContent:postionX, flexWrap:"wrap"}}>
      <Box sx={{display:"flex",
    gap:"8px"}}>
        <img src={user} style={{width:"20px", height:"20px"}} alt=""/>
        <Typography
        className="manRope600"
        
        sx={{fontSize:"14px",
        color:"secondary.main",
      lineHeight:"20px", }}>

          by {name}
        </Typography>
      </Box>
      <Box sx={{display:"flex",
    gap:"8px"}}>
        <img src={chat} style={{width:"20px", height:"20px"}} alt=""/>
        <Typography
        className="manRope600"
        
        sx={{fontSize:"14px",
        color:"secondary.main",
      lineHeight:"20px", }}>

          {count===0?"No Comment":count>1?`${count} Comments`:`${count} Comment`}
        </Typography>
      </Box>
</Box>
  )
}

export default NewsCardUserDetails