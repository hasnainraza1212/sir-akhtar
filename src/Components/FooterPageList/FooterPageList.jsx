import React, { memo } from "react";
import { pages } from "../../utils/utils.jsx";
import PageItem from "../PageItem/PageItem";
const FooterPageList = () => {
  return (
    <>
      {

            pages.map((x,i)=><PageItem key={i} pageName={x.name} link={x.link}/>)
      }
      
    </>
  );
};

export default memo(FooterPageList);
