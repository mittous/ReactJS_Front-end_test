import React, { useContext } from 'react'
import { AppContext } from '../app/context/AppContextProvider'
import Image from 'next/image'
import Images from '../public/assets/Images'


function NavBar() {
  
  const data:any = useContext(AppContext);
  
  const menuItems = [
    {
      icon:  <Image  src='/assets/Vector.svg'
                      alt='home' 
                      width={20} 
                      height={20}
                      priority={true}
                      className=' '
                      />,
      label: 'Dashboard'
    },
    {
      icon: <Image   src={Images.hand}
                      alt='home' 
                      width={19} 
                      height={19}
                      priority={true}
                      className=' text-[#ffffff] hover:text-[#ffffff]'
                      />,
      label: 'P.P.E Violations'
    },
    {
      icon:<Image   src='/assets/ppes.svg'
                    alt='home' 
                    width={19} 
                    height={19}
                    priority={true}
                    className=''
                    /> ,
      label:  'P.P.Es'
    },
    {
      icon:<Image   src='/assets/Contractors.svg'
                    alt='home' 
                    width={19} 
                    height={19}
                    priority={true}
                    className='text-[#ffffff] hover:text-[#ffffff]'
                    />,
      label:  'Contractors'
    },
    {
      icon:<Image   src='/assets/Workers.svg'
                    alt='home' 
                    width={19} 
                    height={19}
                    priority={true}
                    className=''
      />,
      label:  'Workers'
    },
  ]

                            

                            

                            


  return (
    <div className={` bg-white fixed border border-zinc-300 h-screen  ${data.navOn ? 'w-[252px] z-10' : 'w-[65px]'} `}>
      {data.navOn && <div className='flex justify-between  pl-[8px] pt-[10px] pr-[19px] pb-[10px]'>
        
          <Image  src={Images.logo}
                alt='logo' 
                width={190} 
                height={42.73}
                priority={true}
                draggable={false}
                /> 
          <Image  src={Images.toggle}
                alt='toggle' 
                width={17} 
                height={12}
                priority={true}
                draggable={false}
                className='cursor-pointer'
                onClick={(e) => {data.setNavOn(false)}}
                 />

        </div> }
            {!data.navOn && <Image  src='/assets/logosmall.svg'
                alt='logo' 
                width={34} 
                height={36}
                priority={true}
                draggable={false}
                className='m-[13px]'
                />}

            <ul className={`${data.navOn ? 'px-[21px] ' : 'px-[6px]'} py-[20px] text-[#626262]`}>
                
                <li className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF] hover:text-[#ffffff] h-9   cursor-pointer rounded-[5px] flex  items-center`}
                title={menuItems[0].label}>
                  <div >{menuItems[0].icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{menuItems[0].label}</p>}
                </li>
                <li className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF] hover:text-[#ffffff] h-9   cursor-pointer rounded-[5px] flex  items-center`}>
                  <div >{menuItems[1].icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{menuItems[1].label}</p>}
                </li>
            </ul>
            
                {data.navOn ? <span className=' pl-[18px] mb-[5px] text-[#626262]' > MANAGE </span> : <hr/>}
            
            <ul className={`${data.navOn ? 'px-[21px] ' : 'px-[6px]'} py-[5px] text-[#626262]`}>
                
                <li className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF]  hover:text-[#ffffff] h-9   cursor-pointer rounded-[5px] flex  items-center`}>
                  <div >{menuItems[2].icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{menuItems[2].label}</p>}
                </li>
                <li className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF]  hover:text-[#ffffff] h-9   cursor-pointer rounded-[5px] flex  items-center`}>
                  <div >{menuItems[3].icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{menuItems[3].label}</p>}
                </li>
                <li className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF]  hover:text-[#ffffff] h-9   cursor-pointer rounded-[5px] flex  items-center`}>
                  <div >{menuItems[4].icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{menuItems[4].label}</p>}
                </li>
            </ul>

            {data.navOn && <div className='text-[#8A8A8A] border-t-2 pl-[16px] pt-[5px] w-[250px] h-24 fixed bottom-0'>
            <span className=" text-[13px] font-medium  leading-[30px]">@ App name 2021</span>
            <div className="  text-[11px] font-normal  leading-[17.50px]">
              Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut.</div>
            </div>}
    </div>
  )
}

export default NavBar
