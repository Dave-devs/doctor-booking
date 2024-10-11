import { images } from "../constants/images"
import { IoChevronForwardOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* .......Left Side....... */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] m-auto md:mb-[-30px]">
        <p className="text-wt text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment <br /> With Trusted Doctors.</p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-wt text-sm font-light">
          <img className="w-28 h-auto" src={images.group_profiles} alt="" />
          <p>Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" /> schedule your appointment hassle-free.</p>
        </div>
        {/* Book Appointment Button */}
        <a href="#speciality" className="flex items-center justify-center gap-3 bg-wt px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300">
          Book appointment <IoChevronForwardOutline className="w-3 h-3" />
        </a>
      </div>
      {/* .......Left Side....... */}
      <div className="md:w-1/2 relative">
        <img className="w-full h-auto md:absolute bottom-0 rounded-lg" src={images.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header