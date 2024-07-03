import React from 'react'
import Course from '../../Components/Course/Course'
import { Box } from '@mui/material'
import { courses } from '../../utils/utils'
import { v4 as _id } from 'uuid';
import { useNavigate } from 'react-router-dom';
const Courses = () => {
  const navigate = useNavigate()
  const handleNavigate=(id)=>{
    navigate(`/courses/${id}`)
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
            xs:"center"
           },
           flexWrap:"wrap",
           gap:{
              xs:"20px"
           }
        }}>

{courses.map(course=><Course cb={handleNavigate} course_id={course["course_id"]} key={_id()} title={course["Course Title"]} url={course["url"]} description={course["Course Description"]} details={course["Instructor and Course Details"]} />)}

        </Box>
    </Box>
  )
}

export default Courses