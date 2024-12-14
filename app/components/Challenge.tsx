import Image from 'next/image'
import React from 'react'
import spirals from '../../public/spirals.svg'
import FAQList from './Faq'
import Button from './Button'

const Challenge = () => {
  return (
    <div className=' flex justify-between px-20 py-24'>
        <div className='w-2/5 text-white'>
         <p className='text-6xl font-bold'> The challenge <br /> is in 3 Steps;</p>
            <div className='relative w-full'>
                <Image 
                  src={spirals}
                  alt='dashed lines'
                  width={300}
                  height={10}  
                  className="absolute right-[50%] top-10"
                  />         
            </div>
         </div>
         <div className=' w-3/5'>
            <FAQList />
            <div>
            <Button
             type='button'
             title='Join the Challenge'
             className="bg-black font-semibold rounded-xl w-full text-center py-4 px-10 text-[#EF8FFF] cursor-pointer text-lg"
             />
            </div>
         </div>

        </div>
      
  )
}

export default Challenge
