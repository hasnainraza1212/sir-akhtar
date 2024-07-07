import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import leaf from "./../../assets/images/leaf.png"
import { useNavigate } from 'react-router-dom'
const PageItem = ({
    pageName, showleaf=true,
    link="/"
}) => {
  const navigate=useNavigate()
  const handleClick = (link)=>()=>navigate(link)
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:".85rem"
    }}>
       {showleaf && <img style={{
            width:".688rem",
            height:".625rem"
        }} src={leaf} alt={leaf + " page"}/>}
        <Typography  onClick={handleClick(link)} sx={{color:"secondary.main", cursor:"pointer",lineHeight:"1.87rem", fontSize:".93rem"}} className='manRope500'>{pageName}</Typography>
    </Box>
  )
}

export default memo(PageItem)