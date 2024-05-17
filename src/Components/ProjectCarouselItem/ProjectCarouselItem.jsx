import { Box, Typography } from '@mui/material'
import React from 'react'

const ProjectCarouselItem = ({src, title, desc}) => {
  return (
    <Box sx={{position:"relative", color:"white"}}>
        <img src={src} style={{ width: "100%", aspectRatio:"2/3", objectFit:"cover", borderRadius:"10px" }} alt="" />
        <Box sx={{position:"absolute",
      left:"30px", bottom:"20px"}}>
        <Typography
          className="manRope800"
          sx={{
            fontSize: {
              lg: "30px",
              xs:"20px",
              sm:"25px",
            },
            lineHeight: {
              lg: "36px",
              xs: "30px",

            },
            m: { lg: "15px 0", xs:"10px 0" },
          }}
        >
          {title}
        </Typography>
        <Typography
          className="manRope800"
          sx={{
            fontSize: {
              lg: "30px",
              xs:"20px",
              sm:"25px",
            },
            lineHeight: {
              lg: "36px",
              xs: "30px",

            },
            m: { lg: "15px 0", xs:"10px 0" },
          }}
        >
          {desc}
        </Typography>
       
        </Box>
      </Box>
  )
}

export default ProjectCarouselItem