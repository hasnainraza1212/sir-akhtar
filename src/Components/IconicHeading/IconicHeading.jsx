import { Box, Typography } from "@mui/material";
import goldenApparatus from "./../../assets/images/goldenApparatus.png";
const IconicHeading = ({heading="", src=""}) => {
  return (
    <Box sx={{ display: "flex",alignItems:"center",  maxWidth:"270px", gap:"20px" }}>
      <img src={src} alt={heading}/>
      <Typography
        className="manRope800"
        sx={{
          fontSize: "20px",
          lineHeight: "28px",
          color: "primary.main",
          
        }}
      >
        {heading}
      </Typography>
    </Box>
  );
};

export default IconicHeading;
