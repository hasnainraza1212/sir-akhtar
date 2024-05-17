import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const authAsyncThunk = (name, url)=> createAsyncThunk(`auth/${name}`, async(data, THUNKAPI)=>{
    try{
        const response = await axios.post(HOST+url, data)
        return response?.data

    }catch(error){
        return THUNKAPI.rejectWithValue(error)
    }
})
export const register =authAsyncThunk("register", "/register")

export const login = authAsyncThunk("login", "/login")

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, isLoading: false, token: null },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading= true
      })
      .addCase(register.fulfilled, (state, action) => {
       
          state.user= action.payload.user
          state.token= action.payload.token
          state.isLoading=false
          state.message= action.payload.message
       
      })
      .addCase(register.rejected, (state, action) => {
        
          state.user= null
          state.token= null
          state.isLoading= false
          state.message= action.payload.message
       
      })
      .addCase(login.pending, (state) => {
        state.isLoading= true 
      })
      .addCase(login.fulfilled, (state, action) => {
        
          state.user= action.payload.user
          state.token= action.payload.token
          state.isLoading= false
          state.message= action.payload.message
        
      })
      .addCase(login.rejected, (state, action) => {
        
          state.user= null
          state.token= null
          state.isLoading= false
          state.message= action.payload.message
      });
  },
});


export default userSlice.reducer