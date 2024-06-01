import React from 'react'
import Top from './Top'

function Sites() {

  return (
    <div className='flex flex-col'>
      <div className='max-h-[36px] bg-white shadow flex fixed  w-full '>
        <div className=' flex w-[87px] h-9 bg-neutral-50 text-zinc-400 text-[12px] font-medium justify-center border border-[#EDEDED] items-center '>SITES </div>
        <ul className='flex gap-[23px] px-[23px]'>
          <li className='flex items-center justify-center text-[#42A4DF] cursor-pointer hover:text-[#42A4DF] text-[12px] font-medium'>All</li>
          <li className='flex items-center justify-center text-[#ABABAB] cursor-pointer hover:text-[#42A4DF] text-[12px] font-medium'>Site 1</li>
          <li className='flex items-center justify-center text-[#ABABAB] cursor-pointer hover:text-[#42A4DF] text-[12px] font-medium'>Site 2</li>
          <li className='flex items-center justify-center text-[#ABABAB] cursor-pointer hover:text-[#42A4DF] text-[12px] font-medium'>Site 3</li>
          <li className='flex items-center justify-center text-[#ABABAB] cursor-pointer hover:text-[#42A4DF] text-[12px] font-medium'>Site 4</li>
        </ul>
      </div>
        <Top/>

    </div>
  )
}

export default Sites
