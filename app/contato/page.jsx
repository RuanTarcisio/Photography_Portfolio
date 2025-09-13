import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='section bg-white pt-[100px] lg:pt-[140px]'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left">
          {/* bg */}
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10">bg</div>
          {/* text & form */}
          <div className="lg:flex-1 px-4">
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would to get suggestions from you</p>
            {/* form */}
            <form action="" className="bg-green-100 flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  placeholder='Your name'
                />
                <input
                  type="email"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  placeholder='Your email address'
                />
              </div>
              <input
                type="text"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                placeholder='Your message'
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send It</button>
            </form>
          </div>
          {/* image */}
          <div className="lg:flex-1">
            < Image src='/img/contact/woman.png' width={500} height={500} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page