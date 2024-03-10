import { easeIn, motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import Eye from '../assets/eye.png';
function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className=' w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-[36vh] px-[4vw] '>
       {["we create","eye opening","presentations"].map((item,index)=>{
       return (
       <div className="masker">
        
          <div className='w-fit flex items-end overflow-hidden'>
             {index===1&&(
               <motion.div initial={{width:0}} animate={{width:"8vw"}}  transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] rounded-md w-[8vw] h-[5vw]   relative'>
                <img src={Eye} alt="block" />
               </motion.div>
             )}
              
          <h1 className='font-["Founders_Grotesk_X_Condensed"] leading-[0.85] text-[6vw] uppercase '>{item}</h1>
          </div>
        </div>
        )
       })}

       </div>

      <div className='border-zinc-700  px-[4vw] py-[2vw] border-t-[1px] mt-[13vh] flex justify-between'>
      
         {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return <p key={index} className={`text-${index===0? "md":"2xl"} tracking-tighter leading-none`}>{item}</p>
         })}

      <div className='flex gap-5 items-center start   '>
        <div className='uppercase text-[1.2vw] px-[4vh] py-[1vh] border-[1px] border-zinc-500 font-light rounded-full'>
          start the project
        </div>
        <div className=' w-[6vh] h-[6vh] border-[1px] flex items-center justify-center border-zinc-500 rounded-full ' >
          <span className='rotate-[45deg]'>
            <FaArrowUp/>
          </span>
        </div>
      </div>

      
      </div>

    </div>

  )
}

export default Landing