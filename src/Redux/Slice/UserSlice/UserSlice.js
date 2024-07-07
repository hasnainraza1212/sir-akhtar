// Redux/Slice/UserSlice/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
   username:null, email:null, phoneVerificationStatus:null, emailVerificationStatus:null, _id:null, type:null, accessToken:null, refreshToken:null,authenticated:false},
  reducers: {
    handleAuth: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { handleAuth } = userSlice.actions;
export default userSlice.reducer;
