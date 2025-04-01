import SkipImg from "../assets/skip-img.png";

const SkipCard = () => {
  return (
    <div className="bg-[#1c1c1c] p-[26px] rounded-lg w-fit relative">
      <img src={SkipImg} alt="skip image item" />
      <span className="absolute top-12 right-12 bg-[#0037c1] text-white text-sm font-medium rounded-full px-3 py-1">
        4 Yards
      </span>
      <div className="mt-4 bg-[#1c1c1c]">
        <p className="mb-2 text-white">4 Yard Skip</p>
        <p className="text-[#9ca3af] mb-8"> 14 day hire period</p>
        <p className="text-[#0037c1] text-xl font-medium mb-4">
          £216 <span className="text-[#9ca3af] text-sm">per week</span>
        </p>
        <button className="outline-none bg-[#3a3a3a] text-white text-base flex items-center justify-center w-full p-3 rounded-[6px] cursor-pointer">
          Select this skip
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
