import { createSlice } from "@reduxjs/toolkit";
 const doctorSlice = createSlice({
    name:"doctorToken",
    initialState:{
        accessToken: null,
        docId : null,
        docName:null,
        docEmail:null
       
    },
    reducers:{
        accessToken(state,action){
            console.log(action.payload,"token in redux");
            localStorage.setItem("accessToken",action.payload)
            state.accessToken = action.payload;
           
        },
        docId(state,action){
            console.log(action.payload);
            state.docId = action.payload
        },
        docName(state,action){
            state.docName = action.payload
        },
        docEmail(state,action){
            state.docEmail = action.payload
        }
       
    }
 })
 export const {accessToken,docId,docName,docEmail} = doctorSlice.actions;

 
 export default doctorSlice.reducer;