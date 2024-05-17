import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';

const FooterContact = ({
    src, text
}) => {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center", 
      gap: "0.9375rem", 
    }}>
        <img  style={{
            width: "0.875rem", 
            height: "0.875rem", 
          }}
          src={src} alt="icon"
        />
        <Typography sx={{
            color: "secondary.main",
            fontSize: "0.9375rem",
            lineHeight: "1.125rem", 
            height: "1.125rem"
          }}
          className="manRope500"
        >
            {text}
        </Typography>
    </Box>
  )
}

export default memo(FooterContact);
