import { CiWarning } from "react-icons/ci";

export const PrivatePropertyBadge = () => (
  <div className="!text-[#eab308] flex items-center gap-2 rounded-lg py-[6px] px-3 absolute bottom-2 left-2 bg-black">
    <CiWarning className="text-sm" />
    <span className="text-[12px] leading-[16px] font-medium">
      Private Property Only
    </span>
  </div>
);
