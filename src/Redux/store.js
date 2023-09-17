 import { configureStore } from "@reduxjs/toolkit";
 import { persistStore, persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';

 import patientSlice from "./reducers/patientSlice";
import doctorSlice from "./reducers/doctorSlice";


// Create configuration for patient slice persistence
const patientPersistConfig = {
  key: 'PatientData', // Key for storing patientToken in storage
  storage,
};

// Create configuration for doctor slice persistence
const doctorPersistConfig = {
  key: 'doctorData', // Key for storing doctorData in storage
  storage,
};

// Create persisted reducers for patient and doctor slices
const persistedPatientReducer = persistReducer(patientPersistConfig, patientSlice);
const persistedDoctorReducer = persistReducer(doctorPersistConfig, doctorSlice);


  const store = configureStore({
    reducer:{
      PatientData:persistedPatientReducer,
        doctorData:persistedDoctorReducer
    }
  })
  export const persistor = persistStore(store);

  export default store