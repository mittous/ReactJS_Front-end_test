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
                      className=' '
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
                    className=''
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

                            

                            

                            
  const firstTwoItems = menuItems.slice(0, 2);
  const lastItems = menuItems.slice(2, 5);

  return (
    <div className={` bg-white fixed border border-zinc-300 h-screen duration-300 ${data.navOn?'w-[252px]':'w-[65px]'} `}>
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

            <ul className='px-[21px] py-[20px] text-[#626262]'>
                {firstTwoItems.map((item, index) => (
                <li className={`${data.navOn && 'pl-[6px]'} h-9 hover:bg-[#42A4DF] cursor-pointer rounded-[5px] flex justify-start items-center`}>
                  <div key={index}>{item.icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{item.label}</p>}
                </li>
                ))}
              
            </ul>
            
                {data.navOn ? <span className=' pl-[18px] mb-[5px] text-[#626262]' > MANAGE </span> : <hr/>}
            
            <ul className='px-[21px] py-[5px] text-[#626262]'>
                {lastItems.map((item, index) => (
                <li className={`${data.navOn && 'pl-[6px]'} h-9 hover:bg-[#42A4DF] cursor-pointer rounded-[5px] flex justify-start items-center`}>
                  <div key={index}>{item.icon}</div>
                  {data.navOn && <p className='pl-[13px]'>{item.label}</p>}
                </li>
                ))}
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
