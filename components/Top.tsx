import React, { useContext, useEffect } from 'react'
import { AppContext } from '@/app/context/AppContextProvider';
import Image from 'next/image'

function Top() {
    const data:any = useContext(AppContext);

    useEffect(() => {
        const handlerClickOutSide = (e: MouseEvent) => {               
                data.setDropInpute (false);
        };
        document.addEventListener("click", handlerClickOutSide);
        return () => {
            document.removeEventListener("click", handlerClickOutSide);
        };
    });

  return (
    <div className='flex justify-between items-center h-[70px] my-[35px] pl-[40px] pr-[80px]  w-full fixed bg-[#F2F2F2] '>
        
        <div className='flex items-center justify-center text-[#313131] md:text-[16px]'>
            P.P.E Violations Table
        </div> 
        
        <div className='flex gap-[11px]'>
            <div className='flex items-center p-[10px] min-w-[365px] h-[30px] bg-white rounded-sm border border-zinc-300'>
                <Image  src='/assets/Search.svg'
                      alt='toggle' 
                      width={13} 
                      height={13}
                      priority={true}
                      draggable={false}
                      className=''
                      />
                <form>
                    <input type='text' placeholder='Search workers ...' className='w-full h-full  outline-none px-[10px]' />
                </form>
            </div>
            <div className='flex border border-zinc-300 text-[#909090] bg-white text-[12px] min-w-[193px] cursor-pointer items-center justify-center'> 29/10/2022   -   29/11/2022 v</div>
            <div className='flex items-center justify-between p-[10px] min-w-[183px] h-[30px] cursor-pointer bg-white rounded-sm border border-zinc-300'
                 onClick={(e)=>data.setDropInpute(!data.dropInpute)}>
                <div className='flex items-center justify-center text-[#909090] text-[12px]'>
                    All Contractors
                </div> 
                <Image  src='/assets/Arrow 2.svg'
                      alt='Arrow' 
                      width={13} 
                      height={13}
                      priority={true}
                      draggable={false}
                      />
            </div>
            <div className='flex bg-withe rounded-sm border px-[9px] border-zinc-300'>
                
                <Image  src='/assets/miximizeIcon.svg'
                        alt='miximize' 
                        width={18} 
                        height={18}
                        priority={true}
                        draggable={false}
                      />

            </div>
        </div>
        {
            data.dropInpute && <div className=" top-[170px] right-[90px] rounded-[5px] shadow w-[170px] h-[186px] bg-white"> </div>
        }
    
    </div>
  )
}

export default Top
