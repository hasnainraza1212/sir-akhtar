import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from "react-icons/md";
import { useState } from 'react';
import { Box } from '@mui/material';
import openIcon from "./../../assets/images/openAccordian.png"
import closeIcon from "./../../assets/images/closeAccordian.png"

const Accordian = ({title, desc}) => {
    const [open, setOpen] = useState(false)
    const toggle =()=>{
        setOpen(open=>!open)
    }
  return (
    <>
        <Box >
        <Box onClick={toggle}sx={{background:"#F8F7F0",cursor:"pointer", borderRadius:"5px", p:{lg:"10px 10px 10px 38px", xs:"10px 10px 10px 10px"}, display:"flex", alignItems:"center"}}>
            <Typography className="manRope800" sx={{color:"primary.main", mr:"10px",fontSize:{lg:"20px", md:"18px", sm:"16px", xs:"14px"}, lineHeight:{lg:"30px", md:"25px", xs:"18px"}}}>
            {title}
            </Typography>
            <Box sx={{ml:"auto",background:"#C5CE38" , position:"relative",borderRadius:"5px" , cursor:"pointer",minWidth:{md:"40px", sm:"30px", xs:"30px"}, minHeight:{md:"40px", sm:"30px", xs:"30px"}}}>
                <img src={open?openIcon:closeIcon}  style={{width:"100%",position:"absolute", bottom:open?"0px":"", left:"0px" ,objectFit:"contain"}}alt="" />
            </Box>
        </Box>
        {open &&<Box
        className="manRope500"
        sx={{
            p:{
                lg:"22px 38px",
                xs:"10px 5px",

            },
            color:"#878680",
            fontSize:{
                lg:"16px",
                xs:"12px"
            },
            linneHeight:"30px"
        }}>
            {desc}
        </Box>}
        </Box>
      </>
  )
}

export default Accordian