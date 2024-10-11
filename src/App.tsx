import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Doctors from "./pages/Doctors"
import Doctor from "./pages/Doctor"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import MyProfile from "./pages/MyProfile"
import MyAppointments from "./pages/MyAppointments"
import Appointment from "./pages/Appointment"
import RootLayout from "./layout/RootLayout"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:speciality" element={<Doctor />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="my-appointments" element={<MyAppointments />} />
        <Route path="appointment/:docId" element={<Appointment />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App