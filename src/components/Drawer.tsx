import { IoMdClose } from "react-icons/io";

interface IDrawer {
  closeDrawer: () => void;
  showDrawer: boolean;
  skipSize: number | null;
}
const Drawer = ({ closeDrawer, showDrawer, skipSize }: IDrawer) => {
  return (
    <div
      className={`text-white w-full bg-[#1c1c1c] p-5 fixed bottom-0 left-0 right-0 z-[1000] duration-00 transition-all ease-in-out ${
        !showDrawer ? "translate-y-full" : "translate-y-0 "
      }`}
    >
      <IoMdClose
        className="text-white text-xl absolute top-5 cursor-pointer right-5"
        onClick={closeDrawer}
      />
      Drawer
      <div>{skipSize}</div>
    </div>
  );
};

export default Drawer;
