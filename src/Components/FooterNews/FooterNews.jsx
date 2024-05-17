import { Box, Typography } from "@mui/material";
import { memo } from "react";


const FooterNews = ({ date, news }) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        className="manRope700"
        sx={{ fontSize: "1", lineHeight: "1.62rem" }}
      >
        {news}
      </Typography>
      <Typography sx={{lineHeight:"1.75rem", color:"warning.main", fontSize:".93rem"}} className="manRope400" variant="subtitle2">
        {date}
      </Typography>
    </Box>
  );
};

export default memo(FooterNews);
