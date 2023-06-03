import {Route,Routes} from "react-router-dom"
import Login from "../Admin/Components/Login"
import AdminHomePage from "../Admin/Pages/AdminHomePage"
import Graph from "../Admin/Components/graph/Graph"
import Doctors from "../Admin/Components/Doctors"
import Appointments from "../Admin/Components/Appointments"
import Departments from "../Admin/Components/Departments"
import Patients from "../Admin/Components/Patients"
import PendingApprovals from "../Admin/Components/PendingApprovals"

function AdminRouter() {
  return (
    <>
    <Routes>
   <Route path="login" element = { <Login/>}/>
  <Route path="home" element ={ <AdminHomePage/>} >
         <Route index element = {<Graph/>}/>
         <Route path="doctors" element = {<Doctors/>}/>
         <Route path ="departments" element = {<Departments/>}/>
         <Route path="pendingApprovals" element={<PendingApprovals/>}/>
         <Route path="appointments" element = {<Appointments />}/>
         <Route path="home" element = {<Graph />}/>
         <Route path="patients" element = {<Patients />}/>



  </Route>
  


    </Routes>
    </>
    
  )
}

export default AdminRouter