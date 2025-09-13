"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'

const page = () => {
  return (
    <section className='section '>
      <div className="container mx-auto relative h-[90vh]">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden flex justify-center">
            <Image
              src="/img/about/woman.png"
              alt="Sobre mim"
              width={600}
              height={800}
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* text */}
          <div className="flex-1 lg:pt-0 lg:pl-12 z-10 flex flex-col justify-center items-center lg:items-start px-4 lg:px-0">
            <h1 className="h1 mb-6">Sobre Mim</h1>
            <p className="mb-6 max-w-md text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <b> Quo, voluptates tempora facilis officiis</b>, aliquam aliquid a amet ad nemo.
            </p>
            <p className="mb-8 max-w-md text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.
            </p>
            <Link href="/portfolio" className='btn mt-4 px-8 py-3 text-lg'>Veja meus trabalhos</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page