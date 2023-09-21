import Link from 'next/link'
import React from 'react'
// import { buttonVariants } from "shadcn-ui/buttonVariants"
// import shadcnUi from 'shadcn-ui';


const Navbar = () => {
  return (
    <div className='w-full py-2 bg-zinc-100 border-b border-s-zinc-200 fixed z-10 top-0'>
        <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>Logo</Link>
        <Link href='/sign-in' className='btn p-2 bg-black text-white text-sm rounded-md'>Sign in</Link>
        </div>
    </div>
  )
}

export default Navbar