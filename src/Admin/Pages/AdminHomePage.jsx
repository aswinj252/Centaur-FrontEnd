import { Outlet } from 'react-router-dom'
import Navbar from '../Components/navbar'
import Sidebar from '../Components/Sidebar'

function AdminHomePage() {
  return (
<>

<Navbar/>
<Sidebar/>
<Outlet/>
</>
  )
}

export default AdminHomePage