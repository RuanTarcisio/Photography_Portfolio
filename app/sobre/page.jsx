"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import ScrollIndicator from '@/components/ScrollIndicator'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className='section pt-[100px] lg:pt-[140px] pb-10'
    >
      <div className="container mx-auto">
        {/* Cabeçalho com título animado */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 px-4"
        >
          <h1 className="h1 mb-4">Minha Jornada na Fotografia</h1>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Imagem com efeito de moldura */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 border-2 border-accent/20 rounded-lg transform rotate-2 z-0"></div>
              <Image
                src="/img/about/woman.png"
                alt="Fotógrafo profissional"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-lg shadow-xl relative z-10"
                priority
              />
              <ScrollIndicator />

              <div className="absolute -bottom-4 -right-4 bg-accent text-primary py-2 px-4 rounded-lg shadow-lg z-20">
                <span className="text-sm font-semibold">+8 anos de experiência</span>
              </div>
            </div>
          </motion.div>
          {/* Texto e conteúdo */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-0"
          >
            <h2 className="h2 mb-6 text-center lg:text-left">O Mundo Através do Meu Olhar</h2>

            <p className="mb-6 text-lg text-justify leading-relaxed">
              Sou apaixonado por transformar momentos efêmeros em <span className="font-semibold text-accent">memórias eternas</span>. Com mais de 8 anos de experiência, desenvolvi um estilo único que combina técnica apurada com sensibilidade artística.
            </p>

            <p className="mb-6 text-lg text-justify leading-relaxed">
              Especializo-me em <span className="font-semibold">fotografia de retrato, eventos e paisagens</span>, sempre buscando revelar a essência única de cada pessoa e situação. Acredito que cada clique conta uma história e meu objetivo é fazer com que sua história seja contada da maneira mais autêntica possível.
            </p>

            {/* Especialidades */}
            <div className="mb-8 bg-green-200 p-2">
              <h3 className="text-xl font-semibold mb-4">Minhas Especialidades</h3>
              <div className="grid grid-cols-2 gap-3 ">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-2 bg-black/40"></span>
                  <span>Ensaios Fotográficos</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-black/40 rounded-full mr-2"></span>
                  <span>Casamentos</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-black/40 rounded-full mr-2"></span>
                  <span>Fotografia Corporativa</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-black/40 rounded-full mr-2"></span>
                  <span>Books Pessoais</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/portfolio"
                className="btn btn-primary flex-1 text-center py-3 px-6 text-lg font-semibold"
              >
                Ver Portfólio
              </Link>
              <Link
                href="/contato"
                className="btn btn-outline flex-1 text-center py-3 px-6 text-lg font-semibold"
              >
                Entrar em Contato
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Citação inspiradora */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 lg:mt-24 px-4"
        >
          <div className="bg-gray-100 rounded-xl p-8 lg:p-10 text-center max-w-3xl mx-auto">
            <blockquote className="text-xl lg:text-2xl italic text-gray-700 mb-4">
              "A fotografia é a única linguagem que pode ser entendida em qualquer parte do mundo."
            </blockquote>
            <cite className="text-accent font-semibold">- Bruno Barbey</cite>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About