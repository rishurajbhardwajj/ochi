import React from 'react'
import Image from '../assets/Homepage.jpg'
export default function About() {
  return (
    <div className='w-full py-20 px-[4vw] bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl '>
    <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
    <div className='flex gap-20 w-full border-t-[1px] pt-10 border-[#3d451e] mt-[10vh]'>

    <div className='w-1/2 '>

    <h1 className='text-[5vw]'>Our approach:</h1>

    <button className='uppercase gap-10 flex items-center justify-between bg-black py-[1.5vw] rounded-3xl px-[1.5vw] mt-[2vw]'>
    <h1 className='text-white'>Read More</h1> 
    <div className='w-2 h-2 rounded-full bg-zinc-100'></div> 
    </button>  

    </div>

    <div className='w-1/2 h-[80vh] rounded-3xl bg-[#809533c9]'>
  <img src={Image} alt="Description of the image" className="w-full h-full object-cover rounded-3xl" />
</div>


    </div>

    </div>
    )
}
