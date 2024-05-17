import { Box } from '@mui/material'
import React from 'react'
import construction from "./../../assets/images/construction.png"
import Button from '../../Components/Button/Button'
const Construction = () => {
  return (
    <Box sx={{
        width:"100vw",
        display:"grid",
        placeItems:"center",
        p:"10vw 0 "
    }}>
        <Box sx={{width:"40vw"}}>
            <img style={{aspectRatio:"3/2", width:"100%",objectFit:"contain", backgroundPosition:"center"}} src={construction}/>
        </Box>
        <Button text={"Go back to Home Page"}/>


    </Box>
  )
}

export default Construction