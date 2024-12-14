'use client'
import React from 'react'
import { NAV_LINKS } from "../constants/index";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Button from './Button';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const pathname = usePathname();


    return (
    <nav className='z-20 sticky top-0 flex justify-between items-center py-5 px-20 bg-gradient-to-b from-[#f9fff9] to-[#fff] dark:from-[#0f0f0f] dark:to-[#000] max-[768px]:px-4 shadow-sm'>

        <ul className='hidden  lg:gap-20 -full lg:flex font-normal text-lg'>
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href}
            key={link.key}
            className={
              pathname === link.href
                ? "text-[16px] font-medium text-primary  "
                : "text-[16px] font-medium text-dark dark:text-white  hover:text-primary dark:hover:text-primary transition-all"
            }
          >
            {link.label}
          </Link>
        ))}
        </ul>

        <div className="hidden lg:flex items-center gap-9">
        <Link href="/">
          <Button 
          type="button" 
          title="Make a Donation" 
          className=" bg-[#750D8626] rounded-md py-[10px] px-12 text-primary cursor-pointer font-semibold text-base dark:bg-primary dark:text-white"
          />
        </Link>
        <div>
          <Link href="/">
            <Button
              type="button"
              title="Join the Challenge"
              className=" bg-primary rounded-md py-[10px] px-12 text-white font-semibold text-base dark:bg-white dark:text-primary"
            />
          </Link>
        </div>
        <DarkModeToggle />
      </div>


      
    </nav>
  )
}

export default Navbar
