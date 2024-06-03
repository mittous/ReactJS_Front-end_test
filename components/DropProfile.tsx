import { AppContext } from '@/app/context/AppContextProvider';
import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image';

function DropProfile() {
    const data:any = useContext(AppContext);

    
    const languageOptions = [
        {
          icon:  <Image  src='/assets/seetingsIcon.svg'
                          alt='seetingsIcon' 
                          width={17} 
                          height={17}
                          priority={true}
                          className=' '
                          />,
          label: 'Profile settings'
        },
        {
          icon: <Image   src='/assets/policies.svg'
                          alt='policies' 
                          width={16} 
                          height={20}
                          priority={true}
                          className=' text-[#ffffff] hover:text-[#ffffff]'
                          />,
          label: 'Our policies'
        },
        {
          icon:<Image   src='/assets/logoutIcon.svg'
                        alt='logoutIcon' 
                        width={16} 
                        height={20}
                        priority={true}
                        className=''
                        /> ,
          label:  'Log out'
        },
      ]
      
      useEffect(() => {
        const handlerClickOutSide = (e: MouseEvent) => {               
                data.setDropProfile (false);
        };
        document.addEventListener("click", handlerClickOutSide);
        return () => {
            document.removeEventListener("click", handlerClickOutSide);
        };
    });


    return (
        <div className="fixed  my-[75px]  right-1">
            {data.dropProfile && (
            <div className="rounded-[5px] shadow w-[165px] h-[186px] bg-white">
                <ul className="flex h-full flex-col justify-between">
                    <li key={0} className='h-[63px] p-[15px] cursor-pointer hover:bg-gray-100'> 
                        <p className='text-[#313131] text-[12px] font-semibold'> BESIX Group </p>
                        <p className='text-[#797979] text-[12px] font-'> besix.group@besix.be </p>
                    </li>
                        <hr/>
                    {languageOptions.map((language, index) => (
                        <div key={index}>
                            {index === 2 && <hr/>}
                            <li key={index}
                                className='hover:text-[#ffffff] hover:bg-gray-100 px-[15px] py-[7px] cursor-pointer rounded-[5px] flex items-center'>{language.icon}
                                <p className={'text-[#313131] text-[12px] px-[12px]  hover:text-[#313131]'}> {language.label}</p>
                            </li>
                         </div>
                    ))}
                </ul>
            </div>)}
        </div>
    )
}
export default DropProfile


