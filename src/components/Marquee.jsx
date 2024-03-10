import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-[11vh] bg-[#004D43] rounded-tl-3xl rounded-tr-3xl '>
        <div className='flex border-t-2  border-b-2 border-zinc-300 whitespace-nowrap  overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}}  className=' font-semibold leading-none uppercase text-[12vw] font-["Founders_Grotesk_X-Condensed"]  pr-20'> Rishuraj</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='font-semibold leading-none  uppercase text-[12vw] font-["Founders_Grotesk_X-Condensed"] pr-20'> Rishuraj</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='font-semibold leading-none  uppercase text-[12vw] font-["Founders_Grotesk_X-Condensed"] pr-20'> Rishuraj </motion.h1>
        </div>
    </div>
  )
}

export default Marquee