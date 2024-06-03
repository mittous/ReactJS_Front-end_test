import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/app/context/AppContextProvider";
import CheckBoxFilter from "./CheckBoxFilter";

function DataTable() {
  const data: any = useContext(AppContext);

  
  const columnHeadData = data.productIcons;
  const dataRow = data.workerRows;

  return (
    <>
      <div className="h-full flex flex-1 p-2 mx-[65px] w-full py-[200px]">
        <table className="   border rounded-md bg-white  h-full w-full">
          <thead className=" outline outline-1 outline-gray-300 sticky top-[170px] ">
            <tr className=" bg-white  h-full  py-14">
              <th className="px-[3px]">
                <Image
                  src="/assets/seetingsIcon.svg"
                  alt="filter"
                  width={13}
                  height={13}
                  priority={true}
                  draggable={false}
                  className="cursor-pointer flex justify-center items-center   text-[12px] "
                  onClick={(e) => {
                    data.setFilterOn(!data.filterOn);
                  }}
                />
              </th>
              <th className="  text-[12px] text-[#737373] ">
                <div className="flex justify-center items-center shadow-[0_0_0_1px_rgba(242,242,242)] w-full h-full  ">
                  Workers
                </div>
              </th>

              {columnHeadData.map(
                (column: any, index: number) =>
                  !data.filterData.includes(index) && (

                    <th
                      key={index}
                      className="flex-col bg-white items-center justify-between p-4 pb-0"
                    >
                      <div className="flex justify-center  items-center min-w-[80px] h-[86px] bg-[#F5F5F5] rounded-[5px]">
                        <div className="flex absolute justify-center items-center">
                          <Image
                            src={column.src}
                            alt={column.alt}
                            width={column.width}
                            height={column.height}
                            priority={true}
                            className=""
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

          <tbody className="overflow-y-scroll h-full w-full">
            {dataRow.map((Row: any, trIndex:number) => (
              
              <tr key={trIndex}>
                  <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373]">
                    {trIndex + 1}
                  </th>
                  <th className="flex justify-between min-w-[200px] border border-gray-300 px-[10px] py-[4px]">
                    <div className="flex">
                      <Image
                        src={Row.workerIcon}
                        alt="Worker Icon"
                        width={24}
                        height={24}
                        />
                      <div className="flex-row px-[8px] text-nowrap py-[2px]">
                        <div className="flex text-[12px] text-[#484848] leading-[15px]">
                          Blaise DEFLOO
                        </div>
                        <div className="flex text-[11px] text-[#909090]">Manager</div>
                      </div>
                    </div>
                    <Image src={Row.biowanzeImg} alt="Biowanze Image" width={24} height={24} />
                  </th>
                  {Row.rows.map((row: any , index: number) => (
                        !data.filterData.includes(index) && (
                    <td key={index} className="border-y border-gray-300 px-4 py-2">
                      {row}
                    </td>
                )
                  ))}
                </tr>
            ))}
          </tbody>

        </table>
      </div>
      {  console.log("filterData =", data.filterData)
}
      <CheckBoxFilter />
    </>
  );
}

export default DataTable;
