import React from 'react'
import Course from '../../Components/Course/Course'
import { Box } from '@mui/material'
import { courses } from '../../utils/utils'
import { v4 as _id } from 'uuid';
import { useNavigate } from 'react-router-dom';
const CoursePage = () => {
  const navigate = useNavigate()
  const handleNavigate=()=>{
    navigate("/video/zctErxV-xAI")
  }
  return (
    <Box>
        <Box sx={{
            maxWidth:"1200px",
            m:"0 auto",
           padding:{
            xs:"20px"
           },
           display:"flex",
           flexDirection:{
            xs:"column",
            md:"row"
           },
           alignItems:{
            xs:"center",
            md:"start"
           },
           justifyContent:{
            xs:"center",
            lg:"space-between"
           },
           flexWrap:"wrap",
           gap:{
              xs:"20px"
           }
        }}>

{courses.map(course=><Course showPlayIcon={true} cb={handleNavigate} courseItem={true} key={_id()} title={course["Course Title"]} url={course["url"]} description={course["Course Description"]} details={course["Instructor and Course Details"]} />)}

        </Box>
    </Box>
  )
}

export default CoursePage