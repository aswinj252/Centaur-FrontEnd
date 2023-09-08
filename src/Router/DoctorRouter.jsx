import { Routes, Route } from "react-router-dom";
import LoginPage from "../Doctor/Pages/LoginPage";
import HomePage from "../Doctor/Pages/HomePage";
import VideoBooking from "../Doctor/Components/VideoBooking";
import Booking from "../Doctor/Components/Booking";
import Home from "../Doctor/Components/Home";
import Blogs from "../Doctor/Components/Blogs"
import Profile from "../Doctor/Components/Profile";
import VideoTIme from "../Doctor/Components/VideoTIme";

import SignupPage from "../Doctor/Pages/SignupPage";
import PendingPage from "../Doctor/Pages/PendingPage";
import LandingPage from "../Doctor/Pages/LandingPage";
import TIme from "../Doctor/Components/Time";
import EditDetails from "../Doctor/Components/EditDetails";

function DoctorRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<LandingPage/>}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage/>}/>
        <Route path="pendingPage" element={<PendingPage/>}/>

        <Route path="home" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="vbookingapp" element={<VideoBooking />} />
          <Route path="booking" element={<Booking />} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="video_time" element={<VideoTIme/>} />
          <Route path="time" element={<TIme/>} />
          <Route path ="edit" element={<EditDetails/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default DoctorRouter;
