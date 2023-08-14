import { createSlice } from "@reduxjs/toolkit";
 const doctorSlice = createSlice({
    name:"doctorToken",
    initialState:{
        accessToken: null,
       
    },
    reducers:{
        accessToken(state,action){
            console.log(action.payload,"token in redux");
            localStorage.setItem("accessToken",action.payload)
            state.accessToken = action.payload;
           
        }
       
    }
 })
 export const {accessToken} = doctorSlice.actions;

 
 export default doctorSlice.reducer;