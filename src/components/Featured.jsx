import React from 'react'
import Vise from '../assets/vise.jpg'
import Fyde from '../assets/fyde.png'
import { motion, useAnimation } from 'framer-motion'
function Featured() {
    const cards= [useAnimation(),useAnimation()];

    const handleHover=(index)=>{
        cards[index].start({y:"0"});
    };
    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"});
    };
  return (
    <div className='w-full py-20 '>
        <div className='featured px-[4vw] border-b-[1px] border-zinc-600 pb-8 mb-10'>
            <h1 className='text-[5vw] font-["Neue_Montreal"] tracker-tight '>Featured projects</h1>
        </div>
        <div className='cards flex gap-[2vw] w-full px-[4vw]'>



            <motion.div  onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardleft relative rounded-2xl w-1/2 h-[70vh]  bg-purple-900 '>
                    <h1 className='text-7xl text-[#CDEA68] overflow-hidden  flex absolute top-1/2 left-full -translate-x-1/2 z-[999] -translate-y-1/2 tracking-tighter'>
                    {"FYDE".split('').map((item,index)=>(<motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay:index*0.01}} className='inline-block'>{item}</motion.span>))}
                    </h1>
                <div className='incardleft rounded-2xl relative w-full h-full bg-green-600 overflow-hidden'>
                    <img className='w-full h-full bg-cover bg-center' src={Fyde} alt="fyde" />
                </div>
            </motion.div>







            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1 )} className='cardright relative rounded-2xl w-1/2 h-[70vh] bg-purple-100 '>
            <h1 className='text-7xl text-[#CDEA68] flex overflow-hidden absolute top-1/2 right-full translate-x-1/2 z-[999] -translate-y-1/2 tracking-tighter'>
            {"VISE".split('').map((item,index)=>(<motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1],delay:index*0.01}} className='inline-block'>{item}</motion.span>))}
            </h1>
            <div className='incardright w-full h-full relative rounded-2xl  bg-green-600 overflow-hidden'>
                <img className='w-full h-full bg-cover bg-center' src={Vise} alt="vise" />
            </div>
            </motion.div>
            
        </div>

    </div>
  )
}

export default Featured