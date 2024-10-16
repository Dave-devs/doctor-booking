import { useContext, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/context";
import { images, ImageKeys } from "../constants/images";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const context = useContext(AppContext);

  // Memoize filtered doctors based on speciality
  const filteredDoctors = useMemo(() => {
    const doctors = context?.doctors || [];
    return speciality
      ? doctors.filter(
          (doc) => doc.speciality === speciality || doc.speciality === null
        )
      : doctors;
  }, [context, speciality]);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  return (
    <div>
      <p className="text-grey-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border border-accent rounded text-sm sm:hidden transition-all ${showFilter ? "bg-primary text-wt" : ""} `} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        {/* <button onClick={() => setShowFilter(prev => !prev)}>Filters</button> */}
        <div className={`flex-col gap-4 text-sm text-grey-600 ${showFilter ? "flex" : "hidden sm:flex"}`}>
          <p
            onClick={() =>
              speciality === "General Physician"
                ? navigate(`/doctors`)
                : navigate(`/doctors/General Physician`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-accent rounded transition-all cursor-pointer ${
              speciality === "General Physician" ? "bg-accent" : ""
            }`}
          >
            General Physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Gynecologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-accent rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-accent" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Dermatologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-accent rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-accent" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Pediatricians`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-accent rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-accent" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Neurologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-accent rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-accent" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Gastroenterologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-accent rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist" ? "bg-accent" : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filteredDoctors.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-accent rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img
                className="bg-accent"
                src={images[item.imageKey as ImageKeys]}
                alt={item.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-grey-900 text-lg font-medium">{item.name}</p>
                <p className="text-grey-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
