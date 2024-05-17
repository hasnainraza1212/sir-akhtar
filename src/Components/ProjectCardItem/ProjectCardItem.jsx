import { Box, Typography } from '@mui/material'
import React from 'react'
const ProjectCardItem = ({title="", desc=""}) => {
  return (
    <Box>
    <Typography
    className="manRope600"
      sx={{
        lineHeight: {
          lg: "26px",
        },
        fontSize: {
          lg: "14px",
        },
        color: "#878680",
      }}
    >
    {title}
    </Typography>
    <Typography
      className="manRope800"
      sx={{
        color: "#1F1E17",
        fontSize: {
          lg: "16px",
          lineHeight: {
            lg: "26px",
          },
        },
      }}
    >
      {desc}
    </Typography>
  </Box>
  )
}

export default ProjectCardItem