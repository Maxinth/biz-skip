import { IoMdClose } from "react-icons/io";

const Drawer = ({
  closeDrawer,
  showDrawer,
}: {
  closeDrawer: () => void;
  showDrawer: boolean;
}) => {
  console.log({ showDrawer });
  return (
    <div
      className={`text-white w-full bg-[#1c1c1c] p-5 fixed bottom-0 left-0 right-0 z-[1000] duration-400 transition-all ease-in-out ${
        !showDrawer ? "translate-y-full" : "translate-y-0 "
      }`}
    >
      <IoMdClose
        className="text-white text-xl absolute top-5 cursor-pointer right-5"
        onClick={closeDrawer}
      />
      Drawer
    </div>
  );
};

export default Drawer;
