import {Routes,Route} from "react-router-dom"
import LoginPage from "../Patient/Pages/LoginPage"
import LandingPage from "../Patient/Pages/LandingPage"
import SIgnup from "../Patient/Pages/SIgnup"
import AllDoctor from "../Patient/Pages/AllDoctor"
import AllDepartments from "../Patient/Pages/AllDepartments"
import DocDetails from "../Patient/Pages/DocDetails"

function PatientRouter() {
  return (
    <>
    <Routes>
        <Route path="" element={<LandingPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SIgnup/>}/>
        <Route path="Alldoc" element={<AllDoctor/>}/>
        <Route path="Alldep" element={<AllDepartments/>}/>
        <Route path="singledoc" element={<DocDetails/>}/>


    </Routes>
    </>
  )
}

export default PatientRouter