 import { configureStore } from "@reduxjs/toolkit";
 import patientSlice from "./reducers/patientSlice";
import doctorSlice from "./reducers/doctorSlice";
  const store = configureStore({
    reducer:{
        patientToken:patientSlice,
        doctorData:doctorSlice
    }
  })
  export default store