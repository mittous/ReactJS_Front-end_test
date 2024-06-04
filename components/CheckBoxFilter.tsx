import { AppContext } from "@/app/context/AppContextProvider";
import React, { useContext, useEffect } from "react";

function CheckBoxFilter() {
  const data: any = useContext(AppContext);
  const handleCheckboxChange = (rowIndex: number) => {
    data.setFilterData((prevFilterData: number[]) => {
      if (prevFilterData.includes(rowIndex)) {
        return prevFilterData.filter((index) => index !== rowIndex);
      } else {
        return [...prevFilterData, rowIndex];
      }
    });
  };


  

  return (
    <>
      {data.filterOn && (
        <div className="flex fixed rounded-[5px] my-[75px]  items-center justify-center  



            top-[200px] left-[100px] bg-gray-200 " >
          <div className="  border border-zinc-300 rounded-[5px] bg-white">
            <h3 className="flex p-2  items-center justify-center text-[#909090] text-[12px]">
              Select columns to display
            </h3>
            {
              data.productIcons.map((_: any, rowIndex: number) => {
                return (
                  <label key={rowIndex} className="flex p-2">
                    <input
                      type="checkbox"
                      className="flex   checked:bg-blue-600  "
                      value={rowIndex}
                      onChange={() => handleCheckboxChange(rowIndex)}
                      checked={!data.filterData.includes(rowIndex)}
                    />
                    <span className="flex text-[#313131] pl-2 text-[12px]">
                      {data.productIcons[rowIndex].alt}
                    </span>
                  </label>
                );

              })
            }

          </div>
        </div>
      )}
    </>
  );
}

export default CheckBoxFilter;
