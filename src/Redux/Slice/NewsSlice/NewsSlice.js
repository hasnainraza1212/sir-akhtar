import { createSlice } from '@reduxjs/toolkit'
import { NewsCards } from '../../../utils/utils'

const initialState = [...NewsCards]
export const NewsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        upateNewsCards:(state, action)=>{
            const query = action?.payload?.toLocaleLowerCase() || ""
            if(query===""){
                return state=NewsCards
            }
           return  state=state.filter(item=>item?.text?.toLocaleLowerCase()?.includes(query))
        }
    }
})

export const {upateNewsCards} = NewsSlice.actions
export default NewsSlice.reducer