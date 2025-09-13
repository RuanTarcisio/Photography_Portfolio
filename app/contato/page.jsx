"use client"

import ScrollIndicator from '@/components/ScrollIndicator'
import Image from 'next/image'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const openWhatsApp = () => {
    // Substitua pelo seu número de WhatsApp no formato 5511999999999 (código do país + DDD + número)
    const phoneNumber = '5511999999999'
    const message = `Olá! Gostaria de mais informações sobre seus serviços de fotografia.`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className='section bg-white pt-[120px] lg:pt-[240px] pb-16'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-x-12 gap-y-12">
          {/* text & form */}
          <div className="lg:flex-1 w-full px-4 lg:px-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="h1 text-2xl md:text-4xl lg:text-5xl -mt-4">Vamos conversar?</h1>
              <p className=" md:text-lg text-gray-600 text-sm">
                Estou ansioso para ouvir suas ideias e transformar seus momentos em memórias eternas.
                Entre em contato por e-mail ou WhatsApp!
              </p>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="bg-gray-50 p-2 lg:p-4 rounded-2xl shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Seu nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder='Seu nome completo'
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Seu e-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder='seu@email.com'
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder='(11) 99999-9999'
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Sua mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder='Conte-me sobre seu projeto ou ideia...'
                  />
                </div>
                <ScrollIndicator />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 mb-4"
                >
                  Enviar Mensagem
                </button>
              </form>

              {/* Botão do WhatsApp */}
              <div className="mt-8 text-center lg:text-left">
                <p className="mb-4 text-gray-600">Ou se preferir:</p>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center lg:justify-start gap-3 w-full lg:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                  </svg>
                  Conversar pelo WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="lg:flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src='/img/contact/woman.png'
                width={600}
                height={800}
                alt='Fotógrafa profissional'
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
                <p className="font-semibold">Pronto para responder!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
