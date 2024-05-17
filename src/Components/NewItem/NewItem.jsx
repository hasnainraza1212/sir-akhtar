import { Box, Typography } from "@mui/material";
import React from "react";
import bayHaleNew from "./../../assets/images/bayHaleNews.png"
import NewsCardUserDetails from "../NewsCardUserDetails/NewsCardUserDetails";
import Button from "./../../Components/Button/Button"
const NewsItem = ({name, count, text,date, src, newsId}) => {
  return (
    <Box sx={{
        flexBasis:{
          lg:"380px",
          xs:"100%", 
          md:"45%"
        },
    textAlign:"center",
    flexGrow:"1",
    flexShrink:"1",
    borderRadius:"10px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    maxWidth:{
      lg:"380px",
    }
      }}>
    <Box sx={{
      width:"100%",
      borderTopLeftRadius:"10px",
      borderTopRightRadius:"10px",
      aspectRatio:{xs:"1/1"},
      height:'300px',
      position:"relative",
      background:`url(${src})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"center",
      
    
    }}>
    <Box sx={{
      position:"absolute",
      bottom:"-25px",
      left:"50%",
      transform:"translateX(-50%)",
      display:"flex",
      alignItems:"center",
    }}>
      <Button hoverBgColor="#42a53e" link={`/news/${newsId}`} BgColor='#4BAF47' Bg text={date}/>
    </Box>
    </Box>
    <Box sx={{p:{sm:"50px 50px", xs:"50px 10px"} , display:"flex", flexDirection:"column", gap:"10px"}}>
    <NewsCardUserDetails name={name} count={count}/>
        <Typography
         className='manRope800'
        sx={{
                color:"primary.main",
                fontSize:{
                    lg:"26px"
                },
                lineHeight:{
                    lg:"36px"
                },
            }}>
              {text}
        </Typography>
    </Box>
    
      </Box>
  );
};

export default NewsItem;
