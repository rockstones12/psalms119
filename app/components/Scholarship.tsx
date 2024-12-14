import Image from 'next/image';
import React from 'react';
import rafiki from '../../public/rafiki.svg'
import Button from './Button';

const Scholarship = () => {
  return (
    <div className="  text-white p-16 flex bg-[url('/images/bg.svg')] dark:bg-[url('/images/bgg.png')] bg-cover bg-center flex-col md:flex-row items-start justify-between mx-20 mb-32 rounded-[48px]">
      <div className="w-2/5">
      <Image
          src={rafiki}
          alt="Envelope Illustration"
          className="w-[93%]"
        />
      </div>
      <div className="w-full md:w-3/5 space-y-14">
        <h2 className="text-[45px] leading-[40px] font-bold">
          Earn up to <span className=' text-secondary dark:text-[#7CECA7] '>₦3,000,000.00;</span> <br /> 
          <span className='text-[#EF8FFF] dark:text-primary'>
            Educational Scholarships & much <br /> more in opportunities.
          </span>
        </h2>
        <div>
            <Button
             type='button'
             title='Join the Challenge'
             className="bg-white font-semibold rounded-xl w-[90%] text-center py-4 px-10 text-primary cursor-pointer text-lg dark:bg-black dark:text-white"
             />
        </div>
      </div>
    </div>
  );
};

export default Scholarship