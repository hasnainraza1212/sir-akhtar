import { Box, Typography } from '@mui/material'
import React from 'react'
import inion from "./../../assets/images/onion.png";
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCartItemCount, deleteCartItem , incrementCartItemCount} from '../../Redux/Slice/CartSlice/CartSlice';
import { handleSnackAlert } from '../../Redux/Slice/SnackAlertSlice/SnackAlertSlice';

const CartItem = ({src, alt,name , price, count, id}) => {
    const dispatch = useDispatch()
    const data = useSelector(state=> state.cart)
    const handleIncrementCount=()=>{
        const isExist = data.find(item=>item.id===id)
        if(!isExist){
            return   dispatch(handleSnackAlert({open:true, severity:"error", message:`${isExist.name} no longer available for increment!`}))
        }

        dispatch(incrementCartItemCount(id))
        dispatch(handleSnackAlert({open:true, severity:"success", message:`${isExist.name} quantity incremented successfully!`}))
        // const tempData = [...data].filter(item=>item.id!==id)
        // const updatedData = [...tempData,{...isExist, count:isExist.count+1}]
        // window?.localStorage?.setItem("cart", JSON.stringify(updatedData))


    }
    const handleDecrementCount=()=>{
        const isExist = data.find(item=>item.id===id)
        if(!isExist){
            return   dispatch(handleSnackAlert({open:true, severity:"error", message:`${isExist.name} no longer available for decrement!`}))
        }
        if(isExist.count===1){
           return dispatch(handleSnackAlert({open:true, severity:"error", message:`${isExist.name} quantity can not ne less than one!`}))

        }
        if(isExist.count>1){
            dispatch(decrementCartItemCount(id))
            dispatch(handleSnackAlert({open:true, severity:"success", message:`${isExist.name} quantity decremented successfully!`}))
            // const tempData = [...data].filter(item=>item.id!==id)
            // const updatedData = [...tempData,{...isExist, count:isExist.count-1}]
            // window?.localStorage?.setItem("cart", JSON.stringify(updatedData))
        }


    }
    const handleItemRemoveFromCart=()=>{
        const isExist = data.find(item=>item.id===id)
        if(!isExist){
            return   dispatch(handleSnackAlert({open:true, severity:"error", message:`${isExist.name} no longer available for deletion!`}))

         }

        //  const newData = data.filter(item=>item.id!==id)
         dispatch(deleteCartItem(id))
        //  window?.localStorage?.setItem("cart", JSON.stringify(newData))
        return dispatch(handleSnackAlert({open:true, severity:"success", message:`${isExist.name} removed from cart successfully!`}))

    }
  return (
    <Box
              sx={{
                display: "flex",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                gap: "20px",
                p: "10px !important",
                borderRadius: "10px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  flexBasis: "60px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    verticalAlign: "middle",
                    borderRadius: "10px",
                    objectFit: "cover",
                    aspectRatio: "1/1",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  src={inion}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    m: "0px",
                    color: "primary.main",
                    fontSize: "18px",
                    textAlign: {
                      xs: "left",
                    },
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    m: "0px",
                    color: "secondary.main",
                    fontSize: "14px",
                    textAlign: {
                      xs: "left",
                    },
                  }}
                >
                  Fresh | Organic | Healthy
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: "1",
                }}
              ></Box>

              <Box
                sx={{
                  justifySelf: "flex-end",
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    p: "2px 10px",
                    borderRadius: "10px",
                    color: "secondary.main",
                    border: "1px  solid #e9e6e6",
                  }}
                >
                  <Typography
                  onClick={handleDecrementCount}
                    sx={{
                      cursor: "pointer",
                      userSelect: "none",
                      color: "secondary.main ",
                    }}
                  >
                    -
                  </Typography>
                  <Typography
                    sx={{
                      userSelect: "none",
                      color: "secondary.main ",
                    }}
                  >
                    {count}
                  </Typography>

                  <Typography
                  onClick={handleIncrementCount}
                  className="manRope400"
                    sx={{
                      cursor: "pointer",
                      userSelect: "none",
                      color: "secondary.main ",
                    }}
                  >
                    +
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#545454",
                    fontSize: "17px",
                  }}
                >
                  ${price}
                </Typography>
                <Box
                
                 sx={{
                  fontSize:"25px",
                  color:"secondary.main",
                }}>
                <AiFillDelete onClick={handleItemRemoveFromCart} style={{fontSize:"inherit", cursor:"pointer"}} />
                </Box>

              </Box>
            </Box>
  )
}

export default CartItem