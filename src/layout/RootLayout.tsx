import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout