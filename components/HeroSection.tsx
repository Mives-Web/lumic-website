'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const rotatingTexts = [
    'Web Siteleri',
    'Web Uygulamaları', 
    'E-ticaret Çözümleri',
    'Mobil Uygulamalar'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Logo Watermark */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Image
            src="/logo.png"
            alt="LUMIC Watermark"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Modern ve Hızlı{' '}
            <span className="text-gradient block mt-2">
              {rotatingTexts[currentText]}
            </span>{' '}
            Üretiyoruz
          </h1>

          {/* Alt Başlık */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Full-Stack Web Geliştirme | React, Next.js, Node.js
          </p>

          {/* Açıklama */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
            İşletmenizi dijital dünyada öne çıkaracak, kullanıcı dostu ve performanslı 
            web çözümleri geliştiriyoruz. Modern teknolojilerle geleceğe hazır projeler.
          </p>

          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24 md:mb-32">
            <button
              onClick={handleScrollToProjects}
              className="btn-primary text-lg px-8 py-4 animate-slide-up"
            >
              Projelerimize Bak
            </button>
            <button
              onClick={handleScrollToContact}
              className="btn-secondary text-lg px-8 py-4 animate-slide-up"
            >
              Bizimle Çalışın
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="text-white w-8 h-8 opacity-70" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-400 mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300">Tamamlanan Proje</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-500 mb-1 md:mb-2">5+</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300">Yıl Tecrübe</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-400 mb-1 md:mb-2">30+</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300">Mutlu Müşteri</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-500 mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm lg:text-base text-gray-300">Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
