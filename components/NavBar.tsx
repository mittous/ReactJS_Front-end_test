import React, { useContext } from 'react'
import { AppContext } from '../app/context/AppContextProvider'
import Image from 'next/image'
import Sites from './Sites';

function NavBar() {
  const data:any = useContext(AppContext);

  return (
    <div className='  flex-1 pr-[30px] mx-[65px] border border-zinc-300 min-h-[60px] bg-white fixed top-0 w-full'>
      <div className='flex justify-between items-center h-full py-[20px]'>
        
        <div className=' flex items-center mx-[18px]   '>
        
            <Image  src='/assets/toggle.svg'
                  alt='toggle' 
                  width={17} 
                  height={12}
                  priority={true}
                  draggable={false}
                  className='cursor-pointer mr-[20px]'
                  onClick={(e) => {data.setNavOn(true)}}
            />
          <div className='text-[#313131]  text-[18px] font-medium  '>Overview</div>
        </div>
        
        <div className='flex items-center '>
          <div className='flex min-w-[150px] justify-between items-center '>
              <Image  src='/assets/fontSize.svg'
                    alt='fontSize' 
                    width={21} 
                    height={30}
                    priority={true}
                    draggable={false}
                    className='rounded-[5px] flex  items-center cursor-pointer'
                    onClick={(e) => {}}
              />
              <Image  src='/assets/moon.svg'
                    alt='moon' 
                    width={14} 
                    height={16}
                    priority={true}
                    draggable={false}
                    className='rounded-[5px] flex  items-center cursor-pointer'
                    onClick={(e) => {}}
              />
              <Image  src='/assets/notification.svg'
                    alt='notification' 
                    width={15} 
                    height={20}
                    priority={true}
                    draggable={false}
                    className='rounded-[5px] flex  items-center cursor-pointer'
                    onClick={(e) => {}}
              />
              <Image  src='/assets/english.svg'
                    alt='english' 
                    width={20} 
                    height={20}
                    priority={true}
                    draggable={false}
                    className='rounded-[5px] flex  items-center cursor-pointer'
                    onClick={(e) => { data.setDropLanguage(!data.dropLanguage)
                      data.setDropProfile(false)
                    }}
              />
          </div>
          
          <div  className=' cursor-pointer flex min-w-[140px] justify-between items-center mx-[48px]' 
                onClick={(e) => {data.setDropProfile(!data.dropProfile)
                  data.setDropLanguage(false)
                }}>
              <Image  src='/assets/Ellipse 1.svg'
                    alt='Ellipse 1' 
                    width={33} 
                    height={33}
                    priority={true}
                    draggable={false}
                    className='cursor-pointer '
                    onClick={(e) => {}}
              />
              <span className='text-[#7A7A7A] hover:text-[#42A4DF] text-[13px] pr-[27px] pl-[8px]'> BESIX Group </span>
              <Image  src='/assets/Arrow 2.svg'
                    alt='Arrow 2' 
                    width={10} 
                    height={6}
                    priority={true}
                    draggable={false}
                    className='cursor-pointer '
                    onClick={(e) => {}}
              />
          </div>
        
        </div>
      
      </div>
      <Sites />
     
    </div>
  )
}

export default NavBar



