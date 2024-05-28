import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const CustomVideo = () => {
  const { id } = useParams();
const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
     <YouTube  opts={opts} videoId={id} />
    )
  
};

export default CustomVideo;
