import {Routes,Route} from "react-router-dom"
import LoginPage from "../Patient/Pages/LoginPage"
import LandingPage from "../Patient/Pages/LandingPage"
import SIgnup from "../Patient/Pages/SIgnup"
import AllDoctor from "../Patient/Pages/AllDoctor"
import AllDepartments from "../Patient/Pages/AllDepartments"
import DocDetails from "../Patient/Pages/DocDetails"
import VideoAppointment from "../Patient/Pages/videoAppointment"
import Profile from "../Patient/Pages/ProfilePage"
// import Payment from "../Patient/Components/Payment"
// import CheckoutPage from "../Patient/Pages/CheckoutPage"
import Success from "../Patient/Components/Success"

function PatientRouter() {
  return (
    <>
    <Routes>
        <Route path="" element={<LandingPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SIgnup/>}/>
        <Route path="Alldoc" element={<AllDoctor/>}/>
        <Route path="Alldep" element={<AllDepartments/>}/>
        <Route path="singledoc/:id" element={<DocDetails/>}/>
        <Route path="/videoBookingpage/:id" element={<VideoAppointment/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="success" element ={<Success/>} />

    </Routes>
    </>
  )
}

export default PatientRouter