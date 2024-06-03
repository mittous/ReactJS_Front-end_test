
import React, { useContext } from 'react'
import { AppContext } from '../app/context/AppContextProvider'
import Image from 'next/image'
import Images from '../public/assets/Images'
import Tooltip from './Tooltip';

function SideBar() {

  const data: any = useContext(AppContext);

  const menuItems = [
    {
      icon: <Image src='/assets/Vector.svg'
        alt='home'
        width={20}
        height={20}
        priority={true}
        className=' '
      />,
      label: 'Dashboard'
    },
    {
      icon: <Image src={Images.hand}
        alt='home'
        width={19}
        height={19}
        priority={true}
        className=' text-[#ffffff] hover:text-[#ffffff]'
      />,
      label: 'P.P.E Violations'
    },
    {
      icon: <Image src='/assets/ppes.svg'
        alt='home'
        width={19}
        height={19}
        priority={true}
        className=''
      />,
      label: 'P.P.Es'
    },
    {
      icon: <Image src='/assets/Contractors.svg'
        alt='home'
        width={19}
        height={19}
        priority={true}
        className='text-[#ffffff] hover:text-[#ffffff]'
      />,
      label: 'Contractors'
    },
    {
      icon: <Image src='/assets/Workers.svg'
        alt='home'
        width={19}
        height={19}
        priority={true}
        className=''
      />,
      label: 'Workers'
    },
  ]






  const firstTwoItems = menuItems.slice(0, 2);
  const lastItems = menuItems.slice(2, 5);

  return (
    <div className={` bg-white fixed left-0 border border-zinc-300 h-screen   ${data.navOn ? 'w-[252px]  transition duration-150 ease-in-out z-10 fixed' : ' z-10 min-w-[66px]'} `}>
      {data.navOn && <div className='flex justify-between pl-[8px] pt-[10px] pr-[19px] pb-[10px] '>

        <Image src={Images.logo}
          alt='logo'
          width={190}
          height={42.73}
          priority={true}
          draggable={false}
        />
        <Image src={Images.toggle}
          alt='toggle'
          width={17}
          height={12}
          priority={true}
          draggable={false}
          className='cursor-pointer'
          onClick={(e) => { data.setNavOn(false) }}
        />

      </div>}
      {!data.navOn && <Image src='/assets/logosmall.svg'
        alt='logo'
        width={34}
        height={36}
        priority={true}
        draggable={false}
        className='m-[13px]'
      />}

      <ul className={`${data.navOn ? 'px-[21px] ' : 'px-[6px]'} py-[20px] text-[#626262]`}>
        {firstTwoItems.map((item, index: number ) => (
          <li key={index}
            className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF] hover:text-[#ffffff]  h-9   cursor-pointer rounded-[5px] flex  items-center group`}>
            <div >{item.icon}</div>
            {data.navOn ? <p className='pl-[13px]'>{item.label}</p> : <Tooltip label={item.label}/>}
          </li>))}
      </ul>
      {data.navOn ? <span className=' pl-[18px] mb-[5px] text-[#626262]' > MANAGE </span> : <hr />}

      <ul className={`${data.navOn ? 'px-[21px] ' : 'px-[6px]'} py-[5px] text-[#626262]`}>
        {lastItems.map((item, index) => (
          <li key={index}
            className={`${data.navOn ? 'pl-[6px] justify-start ' : 'p-[6px] justify-center '}  hover:bg-[#42A4DF]  hover:text-[#ffffff] h-9   cursor-pointer rounded-[5px] flex  items-center group`}>
            <div >{item.icon}</div>
            {data.navOn ? <p className='pl-[13px]'>{item.label}</p> : <Tooltip label={item.label}/>}
          </li>))}
      </ul>

      {data.navOn && <div className='text-[#8A8A8A] bg-white border-t-2 pl-[16px] pt-[5px] w-[250px] h-24 fixed bottom-0'>
        <span className=" text-[13px] font-medium  leading-[30px]">@ App name 2021</span>
        <div className="  text-[11px] font-normal  leading-[17.50px]">
          Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut.</div>
      </div>}
    </div>
  )

}

export default SideBar
