
import { AppContext } from '@/app/context/AppContextProvider';
import React, { useContext } from 'react';


function CheckBoxFilter() {
    const data:any = useContext(AppContext);

    return (
        <>
        {data.filterOn && <div className="flex fixed rounded-[5px] my-[75px]  items-center justify-center   top-[200px] left-[100px] bg-gray-200">
        <div className="  border border-zinc-300 rounded-[5px] bg-white">
        <h3 className="flex p-2  items-center justify-center text-[#909090] text-[12px]"> Select columns to display </h3>
        <div className="flex flex-col  ">
                                <label className="flex p-2 ">
                                    <input type="checkbox" className="flex text-blue-600 "/>
                                        <span className="flex text-[#313131] pl-2 text-[12px]">Hard Hat</span>
                                </label>
                                <label className="flex p-2">
                                    <input type="checkbox" className="flex text-blue-600 "/>
                                        <span className="flex text-[#313131] pl-2 text-[12px]">Protective gloves</span>
                                </label>
                                <label className="flex p-2">
                                    <input type="checkbox" className="flex text-blue-600 "/>
                                        <span className="flex text-[#313131] pl-2 text-[12px]">Face shield</span>
                                </label>
                                <label className="flex p-2">
                                    <input type="checkbox" className="flex text-blue-600 "/>
                                        <span className="flex text-[#313131] pl-2 text-[12px]">Knee pads</span>
                                </label>
                             </div>
                    </div>
                </div>}
        </>
     )
}

export default CheckBoxFilter;