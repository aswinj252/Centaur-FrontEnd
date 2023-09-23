
import { useEffect } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Profile from '../Components/Profile'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux'

import { Outlet, useNavigate } from 'react-router-dom'
function ProfilePage() {
  const navigate = useNavigate()
  const patientId = useSelector((state)=> state.PatientData.patinetId)
  console.log(patientId);
  useEffect(() => {
    if (patientId) {
      navigate('/profile')
      
    }
    else{
      navigate('/')
    }
  },[])

  return (


<>
<Navbar/>
<Sidebar/>
 <Outlet/>
</>
  )
}

export default ProfilePage