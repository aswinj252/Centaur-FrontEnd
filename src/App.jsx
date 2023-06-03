import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientRouter from "./Router/PatientRouter";
import DoctorRouter from "./Router/DoctorRouter";
import AdminRouter from "./Router/AdminRouter";

import("preline");
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PatientRouter />} />
          <Route path="/doctor/*" element={<DoctorRouter />} />
          <Route path = "/admin/*" element = {<AdminRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
