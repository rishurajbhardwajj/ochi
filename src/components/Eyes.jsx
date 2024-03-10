import React, { useEffect,useRef,useState } from 'react'

export default function Eyes() {

    const[rotate,setrotate]= useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;
        let deltaX =mouseX-window.innerWidth/2;
        let deltaY =mouseY-window.innerHeight/2;
        var angle= Math.atan2(deltaY,deltaX)*(180/Math.PI);
        setrotate(angle-180);
        })
    })
  return (
    
    <div className='w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-section data-scroll-speed="-0.6" className='w-full h-full bg-cover bg-center relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='gap-10  top-1/2 flex left-1/2 absolute -translate-x-[50%] -translate-y-[50%] '> 
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                        <h1 className='text-white z-[999] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>Play</h1>
                        <div style ={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
                            <div className='w-5 h-5 bg-zinc-100 rounded-full'>
    
        </div>
        </div>
        </div>

        </div>      
        <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
    
        <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative '>
        <h1 className='text-white z-[999] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>Play</h1>
        <div style ={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
        <div className='w-5 h-5 bg-zinc-100 rounded-full '>
    
        </div>
        </div>
        </div>
    
        </div>

        </div>
        </div>
        </div>

  )
}
