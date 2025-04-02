import SkipImg from "../assets/skip-img.png";
import { PrivatePropertyBadge } from "./PrivatePropertyBadge";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useVariants } from "../hooks/useVariants";
import { SkipData } from "../App";

type ISkipCard = SkipData & {
  handleClick: (id: number) => void;
  selectedSkipId: number | null;
  index: number;
};

const SkipCard = ({
  size,
  price_before_vat,
  hire_period_days,
  handleClick,
  selectedSkipId,
  id,
  index: cardIndex,
}: ISkipCard) => {
  const isSelected = selectedSkipId === id;
  const { skipCardVariant, variantProps } = useVariants();
  return (
    <motion.div
      variants={skipCardVariant(2, cardIndex * 0.5)}
      {...variantProps}
      className={`${
        isSelected
          ? "border-blue-700"
          : "border-sec-gray hover:border-pri-blue/50 bg-[#1C1C1C] "
      } rounded-lg relative  cursor-pointer group  border-2 p-4 md:p-6 transition-all w-full md:w-fit  text-white `}
    >
      <div className="relative w-full">
        <img
          src={SkipImg}
          alt="4 yard skip"
          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
        />
        {size >= 10 ? <PrivatePropertyBadge /> : null}
      </div>

      <span className="absolute  bg-pri-blue  px-3 py-1 top-8 right-8 z-20 bg--pri-blue text-white rounded-full text-sm font-medium shadow-md">
        {size} Yards
      </span>

      <div className="mt-4">
        <p className="mb-2 text-white  text-lg md:text-xl font-bold  ">
          {size} Yard Skip
        </p>
        <p className="text-[#9ca3af] mb-8 text-sm ">
          {" "}
          {hire_period_days} day hire period
        </p>
        <p className="text-pri-blue text-xl !font-bold font-inter mb-4">
          £{price_before_vat}
          <span className="text-[#9ca3af] text-sm font-normal ml-2">
            per week
          </span>
        </p>
        <button
          onClick={() => handleClick(id)}
          className={`outline-none ${
            isSelected
              ? "bg-blue-700 hover:bg-blue-900"
              : "bg-sec-gray hover:bg-[#3A3A3A] hover:border-pri-blue"
          } text-white text-base flex items-center justify-center w-full py-2.5 md:py-3 px-4  ease-in-out duration-200 rounded-md transition-all  space-x-2  p-3  cursor-pointer `}
        >
          {isSelected ? (
            <span className="text-white">Selected</span>
          ) : (
            <>
              Select this skip <FaArrowRight className="text-base ml-2" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default SkipCard;
