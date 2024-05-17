import { Box } from '@mui/material'
import React, { memo } from 'react'

const FooterHeading = ({text}) => {
  return (
      <>
      <Box sx={{
        mb:".56rem",
        fontWeight:"1.25rem",
        lineHeight:"2.25rem",
      }}
      className="manRope700"
      >{text}</Box>
      <Box sx={{
       display:"flex",
       alignItems:"center",
       gap:".37rem",
       mb:"1.18rem"

      }}>

      <Box sx={{
        background:"#4BAF47",
        width:"2.81rem",
        height:".25rem",
        borderRadius:"2rem"

      }}>

      </Box>
      <Box sx={{
        background:"#4BAF47",
        width:".25rem",
        height:".25rem",
        borderRadius:"50%"

      }}>
      </Box>
      </Box>

      </>
  )
}

export default memo(FooterHeading)