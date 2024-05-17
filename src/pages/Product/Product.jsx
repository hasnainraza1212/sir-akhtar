import { Box, Typography } from "@mui/material";
import React from "react";

const Product = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap:{
            md:"no-wrap",
            xs:"wrap"
        },
        gap:"20px",
        maxWidth:"1200px",
        m:"0 auto",
        boxSizing:"border-box"
      }}
    >
      <Box sx={{ flexBasis: { md: "586px" } , flex:"1"}}>
        <img
          style={{
            width: "100%",
            aspectRatio: "1/1",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

          }}
          src={""}
        />
      </Box>
      <Box sx={{
        flexBasis:{
            md:"600px"
        },
        flex:"1",
        background:"white"
      }}>
        <Box>
        <Typography sx={{
          fontFamily:"Kanit-Light"
        }}>
            Tomato
        </Typography>
        <Typography>
            $50.00
        </Typography>
        </Box>
            <Typography>
                    (1 Customer Review)
            </Typography>
      </Box>
    </Box>
  );
};

export default Product;
