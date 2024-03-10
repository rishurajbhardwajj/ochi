import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-[4vw] flex items-center gap-5 bg-zinc-100'>
        <div className='flex relative items-center justify-center card1 w-1/2 h-[50vh] rounded-xl bg-[#004D43] '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="oxhi" />
            <button className=' absolute left-6 bottom-6 px-4 py-1 border-2 border-[#CDEA68] rounded-full '>&copy; 2021-2025</button>
        </div>
        <div className='w-1/2 h-[50vh] gap-5 flex '>
            <div className='card2 w-1/2 h-full relative flex items-center justify-center  rounded-xl bg-[#212121]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="oxhi" />
            <button className=' absolute left-6 bottom-6 px-4 py-1 border-2 border-[#CDEA68] rounded-full '>RATING 5.0</button>
        
            </div>
            <div className='card3 w-1/2 h-full relative flex items-center justify-center  rounded-xl bg-[#212121]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="oxhi" />
            <button className=' absolute left-6 bottom-6 px-4 py-1 border-2 border-[#CDEA68] rounded-full '>ALUMNI</button>
        
            </div>
            
        </div>

    </div>
  )
}

export default Cards