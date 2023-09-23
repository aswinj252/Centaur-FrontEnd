import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patientstoken",
  initialState: { accessToken: null, patinetId: null, name: null,
    bookingDetails: {
    patientId: null,
    dateId: null,
    docId: null,
  }, },
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
    setBookingDetails(state, action) {
      state.bookingDetails = {
        ...state.bookingDetails,
        ...action.payload,
      };
    },
  },
});
export const { accessToken, patinetId, name,setBookingDetails } = patientSlice.actions;
export default patientSlice.reducer;
