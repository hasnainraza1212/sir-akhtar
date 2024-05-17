import { Box, Typography } from '@mui/material'
import Rating from '../Rating/Rating'
import Button from '../Button/Button'
import { memo, useCallback, useEffect } from 'react'
const ProductCard = ({name="", price="",  src="", cb=()=>{}, id="",rating=3}) => {
  const addToCart=()=>{
    cb({name, price, src, rating,id })
  }
  return (
    <Box sx={{
        borderRadius:"10px",
        textAlign:"center",

      }}>
        <img style={{width:"100%", aspectRatio:"1/1", borderRadius:"10px" }} alt={name} src={src}/>
        <Typography 
        className="manRope800"
        sx={{
          color:"#222222",
          fontSize:"22px",
          lineHeight:"26px",
          mt:"14px"
        }}>
        {name}
        </Typography>

        <Typography 
        className="manRope600"
        sx={{
          fontSize:"16px",
          lineHeight:"30px",
          color:"#4BAF47"
        }}
        >
{
  price
}        </Typography>
          <Rating initialRating={rating} fractions={2}  isStatic={true}/>
          <Box sx={{mt:"10px"}}>
          <Button
              text={"Add to Cart"}
              BgColor={"#4BAF47"}
              hoverBgColor={"#47d742"}
              textColor="white"
              isNavigate={false}
              fullWidth={true}
              cb={addToCart}
            >
            </Button>
          </Box>
      </Box>
  )
}

export default memo(ProductCard)