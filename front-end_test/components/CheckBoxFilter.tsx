
import { AppContext } from '@/app/context/AppContextProvider';
import React, { useContext } from 'react';


function CheckBoxFilter() {
    const data:any = useContext(AppContext);

    return (
        <>
        {data.filterOn && <div className="flex items-center justify-center  absolute top-[300px] left-[100px] bg-gray-200">
        <div className="  border-2 border-blue-600 rounded-lg bg-white">
        <h3 className="text-lg font-semibold text-blue-600">Select </h3>
        <div className="">
                                <label className="flex ">
                                    <input type="checkbox" className="form-checkbox text-blue-600" checked/>
                                        <input type="text" />
                                        <span className="">Protective gloves</span>
                                </label>
                             </div>
                    </div>
                </div>}
        </>
     )
}

export default CheckBoxFilter;