"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div className='flex items-center justify-between
        p-5 shadow-sm
        '>
            <Image src='/logo.svg' width={200} height={200} alt='logo'
                className='w-[100px] md:w-[100px]'
            />
            <ul className='hidden md:flex gap-14 font-medium text-lg'>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact us</li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
            </ul>
            <div className='flex gap-5'>
              <LoginLink> <Button variant="ghost">Login</Button></LoginLink> 
               <RegisterLink><Button>Get Started</Button></RegisterLink> 

            </div>
        </div>
    </div>
  )
}

export default Header