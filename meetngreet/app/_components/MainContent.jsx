"use client"
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

function MainContent() {
  return (
    <div className='flex flex-col justify-center items-center my-20 bg-gradient-to-r from-blue-500 to-teal-400 py-10 rounded-lg shadow-lg'>
      <div className='hidden lg:block relative'>
        <Image src='/profile1.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute right-36 shadow-md'/>
        <Image src='/profile3.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute top-48 left-16 shadow-md'/>
        <Image src='/profile2.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute bottom-20 left-36 shadow-md'/>
        <Image src='/profile2.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute right-16 bottom-32 shadow-md'/>
      </div>
      <div className='text-center max-w-3xl'>
        <h2 className='font-bold text-[60px] text-white fadeInUp'>Effortless Scheduling Awaits</h2>
        <h2 className='text-xl mt-5 text-gray-200 fadeInUp'>MeetnGreet revolutionizes scheduling by automating the entire process, saving you from endless email exchanges to find the ideal meeting time — and bringing additional powerful features to enhance your planning.</h2>
        <div className='flex flex-col mt-5 items-center'>
          <h3 className='text-sm text-gray-100 mb-4 fadeInUp'>Sign Up free with Google</h3>
          <div className='flex justify-center gap-8 mb-4'>
            <LoginLink>
              <Button className="p-7 flex gap-4 bg-white text-gray-800 hover:bg-gray-200 transition duration-300 shadow-lg rounded-full fadeInUp">
                <Image src='/google.png' alt='google' width={40} height={40}/>
                Sign up with Google
              </Button>
            </LoginLink>
          </div>
          <hr className='w-full border-gray-200 my-4'/>
          <LoginLink>
            <h2 className='text-lg text-white fadeInUp'><span className='text-yellow-300'>Sign up Free with Email.</span> No Credit card required</h2>
          </LoginLink> 
        </div>
      </div>
      <div className='w-full mt-20'>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          className="w-full"
        >
          <div className="flex justify-center">
            <img src="/testimonial1.png" alt="Image 1" className="object-contain w-60 h-64"/>
          </div>
          <div className="flex justify-center">
            <img src="/testimonial1.png" alt="Image 2" className="object-contain w-60 h-64"/>
          </div>
          <div className="flex justify-center">
            <img src="/testimonial1.png" alt="Image 3" className="object-contain w-60 h-64"/>
          </div>
          {/* Add more images as needed */}
        </Carousel>
      </div>
    </div>
  )
}

export default MainContent;
