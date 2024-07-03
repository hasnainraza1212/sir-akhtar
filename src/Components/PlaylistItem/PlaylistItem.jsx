
import { Box, Typography } from '@mui/material'
import React from 'react'
import fallback from "./../../assets/images/dsMaths.jpg"
import { useNavigate } from 'react-router-dom'

const PlaylistItem = ({src="", title="",id="" }) => {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    if(id){
      navigate(`/videos/${id}`)
    }
  }
  return (
    <Box 
    onClick={handleNavigate}
    sx={{
        transition:"all .4s",
        background:"white",
        "&:hover":{
          background:"#e8e8e8"
        },
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display:"flex",
        flexGrow:"1",
        flexBasis:"50%",
        flexShrink:"0",
        cursor:"pointer",
        padding:"1vw",
        gap:"2vw",
        alignItems:"center",
        borderRadius:"1vw",
       
      }}>
        <Box sx={{width:"8vw", height:"8vw", borderRadius:"1vw"}}>

        <img style={{aspectRatio:"1/1", boxShadow: '2px 2px 8px rgba(0, 0, 0, .2)', width:"100%",userSelect:"none", height:"100%",  borderRadius:"1vw"}} src={src|| fallback}/>
        </Box>
        <Typography variant="h5" color="primary.main"  className="manRope500">{title}</Typography>
      </Box>
  )
}

export default PlaylistItem