import SkipImg from "../assets/skip-img.png";
import { PrivatePropertyBadge } from "./PrivatePropertyBadge";
import { FaArrowRight } from "react-icons/fa6";
const SkipCard = () => {
  return (
    <div className=" rounded-lg w-fit relative  cursor-pointer group  border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white ">
      <div className="relative w-full">
        <img
          src={SkipImg}
          alt="4 yard skip"
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        <PrivatePropertyBadge />
      </div>

      <span className="absolute    px-3 py-1 top-8 right-8 z-20 bg-[#0037C1] text-white rounded-full text-sm font-medium shadow-md">
        4 Yards
      </span>

      <div className="mt-4 bg-[#1c1c1c]">
        <p className="mb-2 text-white  text-lg md:text-xl font-bold  ">
          4 Yard Skip
        </p>
        <p className="text-[#9ca3af] mb-8 text-sm "> 14 day hire period</p>
        <p className="text-[#0037c1] text-xl !font-bold font-inter mb-4">
          £216{" "}
          <span className="text-[#9ca3af] text-sm font-normal">per week</span>
        </p>
        <button className="outline-none bg-[#2a2a2a] text-white text-base flex items-center justify-center w-full py-2.5 md:py-3 px-4 rounded-md transition-all  space-x-2 hover:bg-[#3A3A3A] hover:border-[#0037C1] p-3  cursor-pointer ">
          Select this skip <FaArrowRight className="text-base ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
