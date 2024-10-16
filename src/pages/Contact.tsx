import { images } from "../constants/images";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium ">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        {/* ******** Left Side ******** */}
        <img
          className="w-full md:max-w-[360px]"
          src={images.contact_image}
          alt=""
        />
        {/* ******** Right Side ******** */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semiold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            54709 Wills Station <br /> Suite 100, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (234) 123-4567-890 <br /> odetundeoreoluwadavid@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at Prescripto
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-wt transition-all duration-500">
            Expolre Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
