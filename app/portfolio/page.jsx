import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-[90vh] relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <b> Quo, voluptates tempora facilis officiis</b>, aliquam aliquid a amet ad nemo.
            </p>
            <p className="mb-8 max-w-md text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.
            </p>
            <Link href="/contato" className='btn mt-4 px-8 py-3 text-lg'>Vamos conversar?</Link>
          </div>
          
          {/* images container with grid layout - CORRIGIDO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 lg:mt-0 pr-16">
            {/* Imagem 1 */}
            <div className="bg-gray-200 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/img/portfolio/1.png"
                alt="Foto do portfólio 1"
                width={320}
                height={220}
                className="w-full h-auto object-cover hover:scale-110 transition-all duration-500"
                priority
              />
            </div>

            {/* Imagem 2 */}
            <div className="bg-gray-200 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/img/portfolio/2.png"
                alt="Foto do portfólio 2"
                width={320}
                height={220}
                className="w-full h-auto object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Imagem 3 */}
            <div className="bg-gray-200 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/img/portfolio/3.png"
                alt="Foto do portfólio 3"
                width={320}
                height={220}
                className="w-full h-auto object-cover hover:scale-110 transition-all duration-500"
              />
            </div>
            
            {/* Adicione mais imagens conforme necessário */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page