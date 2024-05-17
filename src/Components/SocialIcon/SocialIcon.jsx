import { Box } from '@mui/material';
import React, { useState } from 'react';

const SocialIcon = ({ src = "", alt = "", bgColor = "#1F1E17",link="/" }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);
  const handleNavigate = ()=> window.open(link)
  return (
    <Box
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={handleNavigate}
      sx={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        background: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.1s',
      }}
    >
      <img style={{ width: ".87rem", height: ".87rem" }} src={src} alt={alt} />
    </Box>
  );
};

export default SocialIcon;
