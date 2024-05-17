import React, { useMemo, useState } from "react";
import { Box  } from "@mui/material";
import Heading from "../../Components/Heading/Heading";
// import { products } from "../../utils/utils";
import Product from "../../Components/ProductCard/ProductCard";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import { addItemInCart } from "../../Redux/Slice/CartSlice/CartSlice"; 
import { useSelector, useDispatch } from "react-redux";
import { updateProductsCards } from "../../Redux/Slice/ProductSlice/ProductSlice";
import CustomAnimatedButton from "../../Components/CustomAnimatedButton/CustomAnimatedButton";
import { handleSnackAlert } from "../../Redux/Slice/SnackAlertSlice/SnackAlertSlice";

const Shop = () => {
  const products = useSelector(state=> state.products)
  const snackAlert = useSelector(state=>state.snackAlert)
  let cart = useSelector((state) => state?.cart)
  const dispatch = useDispatch();
  const cb = (data) => {
    const existingItem = cart.some((item) => item?.id === data?.id);
    if (existingItem) {
      return dispatch(handleSnackAlert({
        open:true,
        severity: "error",
        message: `${data?.name} already added into cart.`,
      }))
      
    }
    dispatch(handleSnackAlert({
      open:true,
      severity: "success",
      message: `${data?.name} added to cart.`,
    }))
    let newItem = [data]?.map((item) => {
      const { src, ...rest } = item;
      return {...rest, count:1};
    });
    // window?.localStorage?.setItem(
    //   "cart",
    //   JSON.stringify([...cart, ...newItem])
    // );
    dispatch(addItemInCart(...newItem));
  
  };

  if (products?.length ===0) {
    return (
        <CustomAnimatedButton
          cb={() => {
            dispatch(updateProductsCards(""));
          }}
          title={"Clear filter"}
        />
    );
  }

  return (
    <>
      <Box
        sx={{
          maxWidth: "1200px",
          boxSizing: "border-box",
          padding: {
            lg: "106px 0px",
            xs: "50px 0px",
          },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Heading subHeading="Recently Added" heading="Latest Products" />
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: {
              md: "90px",
              xs: "50px",
            },
            boxSizing: "border-box",
            display: "flex",
            flexDirection: {
              md: "row",
              xs: "column",
              flexWrap: "wrap",
              gap: "30px",
            },
          }}
        >
          {products.map((x, i) => (
            <Box
              key={i}
              sx={{
                maxWidth: {
                  sm: "370px",
                  xs: "250px",
                },
                m: "0 auto",
              }}
            >
              <Product
                name={x.name}
                price={x.price}
                src={x.src}
                id={x.id}
                rating={x.rating}
                cb={cb}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <SnackAlert
        severity={snackAlert.severity}
        message={snackAlert.message}
        handleClose={() => {
          dispatch(handleSnackAlert({open:false}))
        }}
        open={snackAlert.open}
      />
    </>
  );
};

export default Shop;
