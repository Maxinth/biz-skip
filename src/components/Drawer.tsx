import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
interface IDrawer {
  closeDrawer: () => void;
  showDrawer: boolean;
  skipSize: number | null;
}
const Drawer = ({ closeDrawer, showDrawer, skipSize }: IDrawer) => {
  return (
    <div
      className={`lg:px-24 flex items-center flex-end lg:justify-between flex-col lg:flex-row text-white w-full h-[110px] lg:h-[90px] bg-[#1c1c1c] p-5 fixed bottom-0 left-0 right-0 z-[1000] duration-500 transition-all ease-in-out ${
        !showDrawer ? "translate-y-full" : "translate-y-0 "
      }`}
    >
      <IoMdClose
        className="text-white text-xl absolute top-2 cursor-pointer right-5"
        onClick={closeDrawer}
      />

      <div className="flex items-center justify-end lg:justify-start  w-full pr-6 mb-2 lg:mb-0 ">
        <span className="hidden text-sm  text-pri-gray mr-6 lg:block">
          {skipSize}
        </span>
        <span className="text-2xl text-pri-blue mr-2 font-bold">£</span>
        <span className="text-sm text-pri-gray">7 day hire</span>
      </div>
      <div className="text-white text-base space-x-4 flex items-center justify-center flex-1 w-full">
        <DrawerButton
          classNames="bg-sec-gray hover:bg-gray-700 flex-1"
          text="Back"
        />
        <DrawerButton
          classNames="bg-pri-blue hover:bg-blue-700 flex-1"
          text={
            <>
              Continue <FaArrowRight className="text-base ml-2 " />
            </>
          }
        />
      </div>
    </div>
  );
};

const DrawerButton = ({
  classNames,
  text,
}: {
  classNames: string;
  text: string | React.ReactNode;
}) => (
  <button
    className={`outline-none  px-6 py-2 cursor-pointer  rounded-md flex items-center justify-center ${classNames}`}
  >
    {text}
  </button>
);

export default Drawer;
