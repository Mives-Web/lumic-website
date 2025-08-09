'use client'

import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const menuItems = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Referanslar', href: '#testimonials' },
    { name: 'İletişim', href: '#contact' },
  ]

  const services = [
    'E-ticaret Geliştirme',
    'Kurumsal Web Sitesi',
    'Web Uygulamaları',
    'Performans Optimizasyonu'
  ]

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'info@lumic.com', link: 'mailto:info@lumic.com' },
    { icon: <Phone className="w-4 h-4" />, text: '+90 555 123 45 67', link: 'tel:+905551234567' }
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/lumic', name: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/company/lumic', name: 'LinkedIn' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 text-white relative">
      {/* Ana Footer İçeriği */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo ve Açıklama */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="LUMIC Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">LUMIC</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Modern web teknolojileri ile işletmenizi dijital dünyada 
                öne çıkaracak çözümler geliştiriyoruz.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-800 hover:bg-primary-400 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h3 className="text-xl font-bold mb-6">Hızlı Linkler</h3>
              <ul className="space-y-3">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleMenuClick(item.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hizmetler */}
            <div>
              <h3 className="text-xl font-bold mb-6">Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h3 className="text-xl font-bold mb-6">İletişim</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {contact.icon}
                    <span>{contact.text}</span>
                  </a>
                ))}
                <div className="pt-4">
                  <p className="text-gray-300 text-sm mb-2">📍 Konum</p>
                  <p className="text-gray-400 text-sm">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ayırıcı Çizgi */}
          <div className="border-t border-dark-700"></div>

          {/* Alt Kısım */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} LUMIC – Tüm Hakları Saklıdır.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by LUMIC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Butonu */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-400 hover:bg-primary-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50"
        title="Başa Dön"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Dekoratif Elementler */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-500"></div>
      <div className="absolute top-4 right-8 w-32 h-32 bg-primary-400/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-secondary-500/5 rounded-full blur-xl"></div>
    </footer>
  )
}

export default Footer
