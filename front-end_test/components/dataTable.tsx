import React from 'react'
import Image from 'next/image';

function DataTable() {
    const i = [-1];
    const dataColum = [
        {
          icon : <Image  src='/assets/product/41.svg'
              alt='Hard Hat' 
              width={90} 
              height={90}
              priority={true}
              className=' '
              />,
          label: "Hard Hat",
        },
        {
          icon : <Image  src='/assets/product/baseball-glove.svg'
              alt='Protective gloves' 
              width={90} 
              height={90}
              priority={true}
              className=' '
              />,
          label: "Protective gloves",
        },
        {
          icon : <Image  src='/assets/product/Group 689.svg'
              alt='Face shield' 
              width={97} 
              height={105}
              priority={true}
              className=' '
              />,
          label: "Face shield",
        },
        {
          icon : <Image  src='/assets/product/image 19.svg'
              alt='Knee pads' 
              width={88} 
              height={89}
              priority={true}
              className=' '
              />,
          label: "Knee pads",
        },
        {
          icon : <Image  src='/assets/product/image 20.svg'
              alt='Hi-Vis Jacket' 
              width={80} 
              height={79}
              priority={true}
              className=' '
              />,
          label: "Hi-Vis Jacket",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268-1.svg'
              alt='Ear protection' 
              width={90}
              height={98}
              priority={true}
              className=' '
              />,
          label: "Ear protection",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268-2.svg'
              alt='Mask' 
              width={100} 
              height={109}
              priority={true}
              className=' '
              />,
          label: "Mask protection",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268-3.svg'
              alt='Rectangle 268-3' 
              width={100} 
              height={110}
              priority={true}
              className=' '
              />,
          label: "Safety shoes",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268-4.svg'
              alt='Rectangle 268-4' 
              width={100} 
              height={110}
              priority={true}
              className=' '
              />,
          label: "Coverall",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268-5.svg'
              alt='Safety Harness' 
              width={100} 
              height={110}
              priority={true}
              className=' '
              />,
          label: "Safety Harness",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268-6.svg'
              alt='Welding helmet' 
              width={100} 
              height={110}
              priority={true}
              className=' '
              />,
          label: "Welding helmet",
        },
        {
          icon : <Image  src='/assets/product/Rectangle 268.svg'
              alt='Safety glasses' 
              width={90} 
              height={99}
              priority={true}
              className=' '
              />,
          label: "Safety glasses",
        },
      ];


const dataRow = ["Row  1",
        "Row  2",
        "Row  3",
        "Row  4",
        "Row  5",
        "Row  6",
        "Row  7",
        "Row  8",
        "Row  9",
        "Row  10",
        "Row  11",
        "Row  12"];

  return (
    <div className='h-full w-full py-[200px]'>
    <div className=' fixed  bg-black items-center h-full py-[20px]'/>
      <table className=" table-auto border-collapse border bg-white border-gray-400 h-full w-full">
      <thead className='sticky top-[170px] bg-white'>
          <tr className='border    h-full  border-b-gray-400 py-14'>
            <th className="   px-[3px]  "> 
            <Image
              src='/assets/seetingsIcon.svg'
              alt='filter' 
              width={13} 
              height={13}
              priority={true}
              draggable={false}
              className='cursor-pointer flex justify-center items-center border-r border-gray-300 px-4 py-2 text-[12px] '
              onClick={(e) => {console.log('filter')}}
            />
            </th>
            <th className=" justify-center items-center  border border-gray-300 px-4 py-2 text-[12px] text-[#737373] "> Workers</th>

            {dataColum.map((column, index) => (
              !i.includes(index) && (
                <th key={index} className="flex-col bg-white items-center justify-between border-b border-gray-300 p-4 ">
                  
                    <div className='flex justify-center relative items-center w-[80px]  h-[86px] p-2  bg-[#F5F5F5] rounded-[5px]'>
                      <div className='flex absolute'>
                        {column.icon}
                      </div>
                   
                  </div>
                  
                  <span className='flex justify-center  text-center py-3 absolute text-neutral-500 text-[11px] font-normal'> 
                    {column.label}
                  </span>
                  </th>
              )
            ))}
            <hr />
          </tr>
      </thead>
      <tbody className='overflow-y-scroll h-full w-full'>
        <tr>
          <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 1 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 1</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 2 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 2</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 3 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 3</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
          <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 4 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 1</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 5 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 2</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 6 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 3</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
          <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 7 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 1</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 8 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 2</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 9 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 3</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
          <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 10 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 1</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 11 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 2</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
        <tr>
            <th className="border border-gray-300 px-[3px] text-[12px] text-[#737373] "> 12 </th>
          <th className="border border-gray-300 px-4 py-2">Row Header 3</th>
          {dataRow.map((row, index) => (
            !i.includes(index) && (
              <td key={index} className="border border-gray-300 px-4 py-2">{row}</td>
            )))}
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default DataTable
