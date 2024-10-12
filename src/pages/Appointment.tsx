import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/context";
import { DoctorData } from "../@types/doctors";
import { ImageKeys, images } from "../constants/images";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import RelatedDoctors from "../components/RelatedDoctors";

interface TimeSlot {
  dateTime: Date;
  time: string;
}

const Appointment = () => {
  const { docId } = useParams<{ docId: string }>();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const context = useContext(AppContext);
  const currencySymbol = context?.currencySymbol || "";

  const [docInfo, setDocInfo] = useState<DoctorData | undefined>(undefined);
  const [docSlots, setDocSlots] = useState<TimeSlot[][]>([]);
  const [slotIndex, setSlotIndex] = useState<number>(0);
  const [slotTime, setSlotTime] = useState<string>("");

  // Get available slots Logic
  const getAvailableSlot = useCallback(() => {
    const today = new Date();
    const slots: TimeSlot[][] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        // Same day: adjust starting hours based on current time
        currentDate.setHours(
          Math.max(
            10,
            currentDate.getHours() + (currentDate.getMinutes() > 30 ? 1 : 0)
          )
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // Future dates: start at 10:00 AM
        currentDate.setHours(10, 0, 0, 0);
      }

      const daySlots: TimeSlot[] = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        daySlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(daySlots);
    }

    setDocSlots(slots); // Update the slots state
  }, []);

  useEffect(() => {
    getAvailableSlot();
  }, [getAvailableSlot, docInfo]);

  useEffect(() => {
    if (context && docId) {
      const doctors = context?.doctors || [];
      const doctorInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(doctorInfo);
      console.log(doctorInfo);
    }
  }, [context, docId]);


  if (!context) {
    return <div>Error: Context not found</div>;
  }

  return (
    docInfo && (
      <div>
        {/* ....... Doctor Details ....... */}
        <div className="flex flex=col sm:flex-row gap-4">
          {/* Image */}
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={images[docInfo.imageKey as ImageKeys]}
              alt=""
            />
          </div>

          {/* ....... Doctor Info: Name, Degree, & Experince  ....... */}
          <div className="flex-1 border border-grey-400 rounded-lg p-8 py-7 bg-wt mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-500">
              {docInfo.name}
              <IoShieldCheckmarkSharp size={20} className="text-primary" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-sm rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* ...... Doctor Info: About ....... */}
            <div>
              <p className="flex items-center g-1 text-sm font-medium text-gray-900 mt-3">
                About
                <BsInfoCircleFill />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            {/* Appointmenat Fee */}
            <p className="text-gray-500 font-medium mt-4">
              Appointmenat Fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ....... Bookig Slots ...... */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((slot, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-wt"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{slot[0] && daysOfWeek[slot[0].dateTime.getDay()]}</p>
                  <p>{slot[0] && slot[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-wt"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLocaleLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-wt text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
        </div>

        {/* ....... Listing Related Doctors ...... */}
        <RelatedDoctors docId={docId!} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
