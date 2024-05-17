import React, { useCallback, useEffect } from "react";
import NewItem from "../../Components/NewItem/NewItem";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { upateNewsCards } from "../../Redux/Slice/NewsSlice/NewsSlice";
import CustomAnimatedButton from "../../Components/CustomAnimatedButton/CustomAnimatedButton";
const News = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  if (news?.length < 1) {
    return (
        <CustomAnimatedButton
          cb={() => {
            dispatch(upateNewsCards(""));
          }}
          title={"Clear Filter"}
        />
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
        p: { lg: "120px 0", sm: "40px", xs: "30px" },
        maxWidth: "1200px",
        m: "auto",
      }}
    >
      {news.map((x, i) => (
        <NewItem
          key={i}
          newsId={x.newsId}
          src={x.src}
          name={x.name}
          date={x.date}
          count={x.count}
          text={x.text}
        />
      ))}
    </Box>
  );
};

export default News;
