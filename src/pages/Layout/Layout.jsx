import React, { useEffect} from 'react'
import { Outlet} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Box } from '@mui/material'
import Drawer from '../../Components/Drawer/Drawer'

const Layout = () => {
  return (
    <div className="layout">
      <Box sx={{
        position:"relative"
      }} className='header'>
        <Box 
        
        sx={{
          // display:{
          //   xs:"none",
          //   md:"block"
          // }
        }}
        
        >
        <Header />
        </Box>
        <Box sx={{
          display:{
            xs:"block",
            md:"none",
          },
          width:"100%",
        }}>
            <Drawer/>
        </Box>
      </Box>
      <div className='outlet'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
