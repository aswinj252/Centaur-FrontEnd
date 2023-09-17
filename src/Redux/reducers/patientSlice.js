import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patientstoken",
  initialState: { accessToken: null, patinetId: null, name: null },
  reducers: {
    accessToken(state, action) {
      localStorage.setItem("PatientaccessToken", action.payload);
      state.accessToken= action.payload;
    },
    patinetId(state, acton) {
      state.patinetId = acton.payload;
    },
    name(state, action) {
      state.name = action.payload;
    },
  },
});
export const { accessToken, patinetId, name } = patientSlice.actions;
export default patientSlice.reducer;
