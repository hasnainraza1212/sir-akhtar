import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
const HeaderIcon = ({ component = <></>, id = "", cb = () => {} }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Box
      onClick={() => {
        cb(id);
      }}
      sx={{ position: "relative", cursor: "pointer" }}
    >
      <Box sx={{ userSelect: "none", width:"24px",display:{xs:id==="cart"?"block":"none", md:"block"} }}>{component}</Box>
      {id === "cart" && (
       cart?.length > 0 &&
        <Box
          sx={{
            position: "absolute",
            top: "-7px",
            padding: "8px",
            right: "-22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#C5CE38",
            borderRadius: "50%",
            height: "8px",
            width: "8px",
            userSelect: "none",
            color: "white",
            fontSize: "11px",
          }}
        >
          {cart?.length > 9 ? (
            <Box sx={{ m: "0", position: "relative", color: "white" }}>
              <Typography sx={{ mb: "-2px", ml: "-2px",  fontSize: "11px"}}>9</Typography>
              <Typography
                sx={{
                  m: "0",
                  position: "absolute",
                  top: "-3.5px",
                  right: "-8px",
                  fontSize: "11px"
                }}
              >
                +
              </Typography>
            </Box>
          ) : (
            cart.length
          )}
        </Box>
      )}
    </Box>
  );
};

export default memo(HeaderIcon);
