import { createSlice } from "@reduxjs/toolkit";


const patientSlice = createSlice({
    name :"patientstoken",
    initialState:{},
    reducers:{
        addToken(state,action){
            return action.payload
        }


    }
})
export const {addToken} = patientSlice.actions
export default patientSlice.reducer;