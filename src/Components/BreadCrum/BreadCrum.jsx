import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumBG from "./../../assets/images/breadCrumBg.png";
import { useSelector } from "react-redux";

const BreadCrum = () => {
  const auth = useSelector(state=>state.auth)
  const {pathname} = useLocation()
  const location = useLocation();

  const crumbs = useMemo(() => {
    return location.pathname
      .split("/")
      .filter((x) => x !== "")
      .map((x, i) => (
        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box sx={{ color: "white" }}>/</Box>
          <Link className="manRope400" style={{ color: "white", textDecoration: "none" }} to={`/${x}`}>
            {`${x} `}
          </Link>
        </Box>
      ));
  }, [location.pathname]);

  const currentPage = useMemo(() => {
    const pages = location.pathname.split("/").filter((x) => x !== "");
    return pages[0];
  }, [location.pathname]);
if(pathname.includes("/content")&& !auth?.authenticated){
  return null
}
  return (
    <Box
      sx={{
        width: "100%",
        height: "5vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.9)), url(${BreadCrumBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        p:"20vh 0"
      }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Link className="manRope400" style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>{" "}
        {crumbs}
      </Box>
      <Typography
        className="manRope800"
        sx={{
          mt: "20px",
          fontSize: { lg: "50px" },
          lineHeight: { lg: "60px" },
          color: "white",
        }}
      >
        {currentPage}
      </Typography>
    </Box>
  );
};

export default BreadCrum;
