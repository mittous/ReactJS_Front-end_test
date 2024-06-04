import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/app/context/AppContextProvider";

function TheadTable() {
  const data: any = useContext(AppContext);


  const columnHeadData = data.productIcons;
  return (
    <thead className=" h-[150px] outline outline-1 justify-center items-center bg-white outline-gray-300 sticky top-[170px] ">
    <tr className=" bg-white h-full  py-14">
      <th className="px-[3px] my-custom-div  h-full" >
        <Image
          src="/assets/seetingsIcon.svg"
          alt="filter"
          width={13}
          height={13}
          priority={true}
          draggable={false}
          className="cursor-pointer  "
          onClick={(e) => {
            data.setFilterOn(!data.filterOn);
          }}
        />
      </th>
      <th className="my-v2-custum-div  justify-center bg-white items-center max-w-[100px]  outline outline-1 outline-gray-300 h-full">
        <div className="text-[12px] text-[#737373]">
          Workers
        </div>
      </th>

      {columnHeadData.map(
        (column: any, index: number) =>
          !data.filterData.includes(index) && (

            <th
              key={index}
              className="flex-col bg-white items-center justify-between p-4 pb-0 flex-1"
            >
              <div className="flex justify-center  items-center min-w-[80px] h-[86px] bg-[#F5F5F5] rounded-[5px]">
                <div className="flex  justify-center items-center">
                  <Image
                    src={column.src}
                    alt={column.alt}
                    width={column.width}
                    height={column.height}
                    priority={true}
                  />
                </div>
              </div>

              <span className="flex justify-center  text-center pt-3 h-[60px]  text-neutral-500 text-[11px] font-normal">
                {column.label}
              </span>
            </th>
          )
      )}
    </tr>
  </thead>
  )
}

export default TheadTable