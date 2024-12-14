import Image from 'next/image'
import React from 'react'
import flag from '../../public/flag.png'
import Button from './Button'

const Transform = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-56 py-24 gap-14'>
        <div className='relative'> 
            <p className='text-primary font text-5xl font-extrabold text-center'> Join the movement &<span className='text-light'> be part of 
            <br />a generation</span> <span className=' text-secondary'>that will transform 
            Nigeria!</span></p>
            <div>
                <Image
                src={flag}
                alt='nigeria flag'
                width={70}
                height={10}
                className='absolute right-[37%] -bottom-5 -z-10'
                />
            </div>
        </div>
            <div>
            <Button
             type='button'
             title='Join the Challenge'
             className="bg-black font-semibold rounded-xl text-center py-4 px-52 text-[#7CECA7] cursor-pointer text-lg"
             />
            </div>
    </div>
  )
}

export default Transform
 