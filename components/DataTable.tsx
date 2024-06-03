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
      <div className="h-full  w-full flex flex-1 ml-[65px]  py-[200px] p-[40px]">
        <table className="  border justify-center  rounded-md bg-white  h-full ">
          <thead className=" outline outline-1 justify-center items-center bg-white outline-gray-300 sticky top-[170px] ">
            <tr className=" bg-white h-full  py-14">
              <th className="px-[3px] my-custom-div left-corner-costum">
                <Image
                  src="/assets/seetingsIcon.svg"
                  alt="filter"
                  width={13}
                  height={13}
                  priority={true}
                  draggable={false}
                  className="cursor-pointer flex justify-center items-center "
                  onClick={(e) => {
                    data.setFilterOn(!data.filterOn);
                  }}
                />
              </th>
              <th className="my-v2-custum-div left-corner-costum  justify-center  bg-white items-center  max-w-[200px] outline outline-1 outline-gray-300 h-full   ">
                <div className="text-[12px] text-[#737373] ">
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

          <tbody className="overflow-y-scroll h-full w-full">
            {dataRow.map((Row: any, trIndex:number) => (
              
              <tr key={trIndex} >
                  <th className="my-custom-div top-[334px] border border-gray-300 px-[3px] text-[12px] text-[#737373]">
                    {trIndex + 1}
                  </th>
                    <th className=" my-v2-custum-div top-[334px] min-w-[300px] border   px-[10px] py-[4px]">
                      <div className="flex justify-between w-full">

                        <div className="flex">
                          <Image
                            src={Row.workerIcon}
                            alt="Worker Icon"
                            width={40}
                            height={40}
                            />
                          <div className="flex-row px-[8px] text-nowrap py-[2px]">
                            <div className="flex text-[12px] text-[#484848] leading-[15px]">
                              Blaise DEFLOO
                            </div>
                            <div className="flex text-[11px] text-[#909090]">Manager</div>
                          </div>
                        </div>
                      <Image src={Row.biowanzeImg} alt="Biowanze Image" width={40} height={40} />
                      </div>
                  </th>
                  {Row.rows.map((row: number , index: number) => (
                        !data.filterData.includes(index) && (
                    <td key={index} className=" border-y border-gray-300 px-4 py-2 ">
                      <div className=" flex justify-center items-center  ">
                       { row > 9  ? <div className="w-9 h-9  rounded-full flex justify-center items-center  bg-red-600 text-center" > {row}</div> : row < 9 ?
                       <div className=" bg-amber-400 w-9 h-9 rounded-full flex justify-center items-center  text-zinc-800 text-sm text-center" > {row}</div>:
                       <span className="text-[#C4C4C4]">-</span>
                        }
                      </div>
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
