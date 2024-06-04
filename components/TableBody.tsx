import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/app/context/AppContextProvider";

function TableBody() {
  
  const data: any = useContext(AppContext);
  const dataRow = data.workerRows;

  return (
    <tbody className="overflow-y-scroll h-full w-full">
            {dataRow.map((Row: any, trIndex: number) => (

              <tr key={trIndex} >
                <th className="my-custom-div top-[334px] outline outline-1 w-3 outline-gray-300 px-[3px] text-[12px] text-[#737373]">
                  {trIndex + 1}
                </th>
                <th className=" my-v2-custum-div top-[334px] min-w-[300px] outline outline-1 outline-gray-300  px-[10px] py-[4px]">
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
                {Row.rows.map((row: number, index: number) => (
                  !data.filterData.includes(index) && (
                    <td key={index} className="border-y border-gray-300 px-4 py-2 ">
                      <div className=" flex justify-center items-center">
                        {row > 9 ? <div className="w-9 h-9  rounded-full flex justify-center items-center text-white bg-red-600 text-center "> {row}</div> : row < 9 ?
                          <div className=" bg-amber-400 w-9 h-9 rounded-full flex justify-center items-center  text-zinc-800 text-sm text-center" > {row}</div> :
                          <span className="text-[#C4C4C4]">-</span>
                        }
                      </div>
                    </td>
                  )
                ))}
              </tr>
            ))}
          </tbody>

  )
}

export default TableBody