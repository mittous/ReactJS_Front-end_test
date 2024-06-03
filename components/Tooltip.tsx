import React from "react";

function Tooltip({ label }: { label: string }) {
  return (
    <div
      className="
                                    absolute left-[45px] rounded-sm px-[16px] py-[6px] ml-6 bg-[#343434] text-white text-xs
                                    invisible opacity-20 -translate-x-3 transition-all
                                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
    >
      {label}
    </div>
  );
}

export default Tooltip;
