import axios from "axios";
import {  useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
       const res = await axios.get(url)
       setData(res?.data||[])
      } catch (error) {
        throw new Error(error.message);
      }
    })();
  }, [url]);

  return{data};
};

export default useGetData;
