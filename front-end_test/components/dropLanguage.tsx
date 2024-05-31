import { AppContext } from '@/app/context/AppContextProvider';
import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image';

function DropLanguage() {
    const data:any = useContext(AppContext);

    
    const languageOptions = [
        {
          icon:  <Image  src='/assets/english.svg'
                          alt='english' 
                          width={20} 
                          height={20}
                          priority={true}
                          className=' '
                          />,
          label: 'English (EN)'
        },
        {
          icon: <Image   src='/assets/france.svg'
                          alt='france' 
                          width={20} 
                          height={20}
                          priority={true}
                          className=' text-[#ffffff] hover:text-[#ffffff]'
                          />,
          label: 'Français (FR)'
        },
        {
          icon:<Image   src='/assets/nederlands.svg'
                        alt='nederlands' 
                        width={20} 
                        height={20}
                        priority={true}
                        className=''
                        /> ,
          label:  'Nederlands (NL)'
        },
        {
          icon:<Image   src='/assets/spain.svg'
                        alt='spain' 
                        width={20} 
                        height={20}
                        priority={true}
                        className='text-[#ffffff] hover:text-[#ffffff]'
                        />,
          label:  'Español (ES) '
        },
        {
          icon:<Image   src='/assets/germany.svg'
                        alt='germany' 
                        width={20} 
                        height={20}
                        priority={true}
                        className=''
          />,
          label:  'Deutsch (DE) '
        },
      ]
      
    useEffect(() => {
        const handlerClickOutSide = (e: MouseEvent) => {               
                data.setDropLanguage(false);
        };
        document.addEventListener("click", handlerClickOutSide);
        return () => {
            document.removeEventListener("click", handlerClickOutSide);
        };
    });


    return (
        <div className="absolute top-[75px] right-[150px] ">
            {data.dropLanguage && (
            <div className=" rounded-[5px] gap-[10px]  shadow w-[133px] h-[161px]  bg-white">
                <ul className="flex h-full flex-col justify-between py-[10px]">
                    {languageOptions.map((language, index) => (
                        <li key={index} 
                            className='hover:text-[#ffffff] hover:bg-gray-100 w-full cursor-pointer pl-[11px] rounded-[5px] flex  items-center'>{language.icon}
                            <p className={`${index === 0 ? 'text-[#313131]' :'text-[#ADADAD]'} text-[12px]   hover:text-[#313131]`}> {language.label}</p>
                        </li>
                    ))}
                </ul>
            </div>)}
        </div>
    )
}
export default DropLanguage