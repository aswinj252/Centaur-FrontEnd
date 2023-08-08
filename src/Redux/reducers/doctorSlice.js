import { createSlice } from "@reduxjs/toolkit";
 const doctorSlice = createSlice({
    name:"doctorToken",
    initialState:{
        accessToken: null,
        refreshToken: null,
    },
    reducers:{
        accessToken(state,action){
            
            return action.payload
        },
        refreshToken(state,action){
            return action.payload        }
    }
 })
 export const {accessToken} = doctorSlice.actions;
 export const {refreshToken} = doctorSlice.actions;
 export default doctorSlice.reducer;