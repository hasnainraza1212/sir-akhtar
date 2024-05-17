import { Box, Typography } from '@mui/material'
import React from 'react'

const ChecklistItem = ({text="",src=""}) => {
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:"15px"
      }}>
          <img src={src} alt={text}/>
          <Typography
          className="manRope600"
          sx={{
            fontSize:"16px",
            lineHeight:"30px",
            color:"primary.main"
          }}
          >
         {text}
          </Typography>
      </Box>
  )
}

export default ChecklistItem