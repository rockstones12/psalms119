import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' border-t border-dashed border-spacing-x-12 border-[#008751] my-11 mx-24 pt-20'>
      <div className=' flex justify-between items-center text-primary text-lg font-bold'>
        <Link href='/'>
        www.psalm119.ng
        </Link>

        <p> © psalm119 2024</p>

      </div>
    </div>
  )
}

export default Footer
