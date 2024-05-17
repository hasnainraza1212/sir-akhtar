import React, { useState, useRef } from "react";
import playIcon from "./../../assets/images/playIcon.png";
import videothumbnnail from "./../../assets/images/videothumbnail.png";
import farmVideo1 from "./../../assets/videos/farmVideo1.mp4";
import { Box, Skeleton, Typography } from "@mui/material";
const VideoBox = ({ icon = "", videoUri = "", title = "" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnLoad = () => {
    setIsLoading(false);
  };
  const videoRef = useRef(null);
  return (
    <Box
      sx={{
        
        borderRadius: "10px",
        m: {
          xs: "0 auto 0px auto",
        },
        // maxHeight: {
        //   xs: "150px",
        //   sm: "300px",
        // },
        position: "relative",
      }}
    >
      

      <iframe
        ref={videoRef}
        width="100%"
        style={{ borderRadius: "10px", verticalAlign:"middle", visibility:isLoading?"hidden":"visible"}}
        src="https://www.youtube.com/embed/4D0h8xzHTSs?si=2CYa8jFSrlx5RLFh"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={handleOnLoad}
      ></iframe>
      {
        isLoading&&<Box>
        <Skeleton variant="rectangular" sx={{width:"100%", borderRadius:"10px", pb:"20px", mb:"10px"}}  height={150} />
          <Skeleton sx={{width:"100%", borderRaius:"10px"}} />
          <Skeleton sx={{width:"60%", borderRaius:"10px"}} />
      </Box>
      }
       

    </Box>
  );
};

export default VideoBox;
