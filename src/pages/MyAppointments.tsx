import { useContext } from "react";
import { AppContext } from "../context/context";
import { ImageKeys, images } from "../constants/images";

const MyAppointments = () => {
  const context = useContext(AppContext);
  if (!context) {
    return <div>Error: Context not found</div>;
  }
  const { doctors } = context;

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
            <div>
              <img className="w-32 bg-indigo-50" src={images[item.imageKey as ImageKeys]} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-sm mt-1"><span className="text-sm text-neutral-700 font-medium">Date & Time:</span> 16, Oct, 2024 | 10:00 AM</p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-2">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-wt transition-all duration-300">Pay Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-wt transition-all duration-500">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments