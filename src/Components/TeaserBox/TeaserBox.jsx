import { Box, Typography } from "@mui/material";
const TeaserBox = ({title="", heading="",  subHeading="",text=""}) => {
  return (
  
    <Box
      sx={{
        flexBasis: {
          md: "50%",
          xs: "100%",
        },
      }}
    >
      <Typography
        className="coveredBy400"
        sx={{
          lineHeight: "36px",
          fontSize: "24px",
          color: "warning.main",
        }}
      >
        {title}
      </Typography>

      <Typography
        className="manRope800"
        sx={{
          lineHeight: {
            md:"57.6px",
            xs:"40px"
          },
          fontSize: {
            md:"40px",
            xs:"30px"
          },
          color: "primary.main",
          maxWidth:"510px"
        }}
      >
        {heading}
      </Typography>
      <Typography
        className="manRope800"
        sx={{
          lineHeight:"30px",
          fontSize:{
            md:"26px",
            xs:"18px"
          },
          color:"success.main",
          maxWidth:"530px",
          mt:{
            md:"30px",
            xs:"15px"
          }
        }}
      >
       {subHeading}
      </Typography>
      <Typography
        className="manRope500"
        sx={{
          lineHeight:"30px",
          fontSize:"16px",
          color:"secondary.main",
          maxWidth:"497px",
          mt:{
            md:"30px",
            xs:"15px"
          },
          textAlign:"justify"
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default TeaserBox