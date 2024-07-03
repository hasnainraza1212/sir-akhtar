import { Box, Typography } from '@mui/material'
import React from 'react'
const Course = ({
  title="",
  description="",
  details="",
  url="",
  courseItem=false,
  course_id="",
  cb=()=>{},
  showPlayIcon=false
}) => {
  return (
    <Box
    onClick={()=>{cb(course_id)}}
    
    sx={{
      padding: "10px",
      cursor:"pointer",
      border: "#d1d7dc 1px solid",
      display: "flex",
      flexDirection: {
        md:courseItem?"column": "row",
        xs: "column"
      },
      maxWidth: {
        xs: "600px",
        md:courseItem?"350px": "100%"
      },
      flexShrink: 0,
      gap:"20px"
    }}>
      <Box sx={{
        position:"relative",
        flexBasis: {
          lg:courseItem?"100%": "400px",
          md:courseItem?"100%": "350px",
          sm:courseItem?"100%": "300px",
          xs: "100%"
        },
        flexGrow: {
          xs: 1,
          md:courseItem?1: 0
        },
        flexShrink:0
      }}>
        {
          showPlayIcon?<Box sx={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            width: "70px", 
            height: "70px", 
            borderRadius: "50%", 
            background: "black", 
            display: "grid", 
            placeContent: "center"
          }}>
            <Box
              sx={{
                transform: "rotate(90deg)",
                width: 0,
                height: 0,
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                borderBottom: "35px solid white",
                ml:"10px"
              }}
            ></Box>
          </Box>:null
        }

        <img style={{ width: "100%", height: "100%", aspectRatio: "3/2" }} src={url} />
      </Box>
      <Box>
        <Typography
        className='manRope700'
        sx={{
          fontSize:{
            lg:courseItem?"1.5rem":"2.5rem",
            md:courseItem?"1.5rem":"2rem",
            xs:"1.5rem"
          },
          fontWeight:600,
        }}>{title}</Typography>
        <Typography 
        className='manRope500'
        sx={{
          fontSize:{
            lg:courseItem?"1.1rem":"1.4rem",
            md:courseItem?"1.1rem":"1.2rem",
            xs:"1rem"
          },
          fontWeight:500,
          mt:"20px"
        }}
        >{description}</Typography>
        <Typography
         className='manRope400'
         sx={{
           fontSize:{
            lg:courseItem?".9rem":"1.1rem",
            md:courseItem?".9rem":"1rem",
            xs:".9rem"
           },
           fontWeight:400,
           mt:".5rem"
         }}
        >{details}</Typography>

      </Box>
    </Box>
  )
}

export default Course