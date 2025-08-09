'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '', service: '' })
      
      // 3 saniye sonra teşekkür mesajını gizle
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-posta',
      value: 'info@lumic.com',
      link: 'mailto:info@lumic.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+90 555 123 45 67',
      link: 'https://wa.me/905551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Konum',
      value: 'İstanbul, Türkiye',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/lumic',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/lumic',
      color: 'hover:bg-blue-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-50 pt-24">
      <div className="container-custom">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            Bizimle{' '}
            <span className="text-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Projeniz hakkında konuşmaya hazırız. Size en uygun çözümü 
            birlikte bulalım ve hayalinizdeki projeyi gerçekleştirelim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Sol Taraf - İletişim Formu */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-dark-800 mb-6">
                Proje Hakkında Konuşalım
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-green-600 mb-2">
                    Mesajınız Alındı!
                  </h4>
                  <p className="text-dark-600">
                    24 saat içinde size geri dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* İsim */}
                  <div>
                    <label htmlFor="name" className="block text-dark-700 font-medium mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>

                  {/* E-posta */}
                  <div>
                    <label htmlFor="email" className="block text-dark-700 font-medium mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>

                  {/* Hizmet Seçimi */}
                  <div>
                    <label htmlFor="service" className="block text-dark-700 font-medium mb-2">
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Hizmet seçin</option>
                      <option value="e-ticaret">E-ticaret Geliştirme</option>
                      <option value="kurumsal">Kurumsal Web Sitesi</option>
                      <option value="web-app">Web Uygulaması</option>
                      <option value="optimizasyon">Performans Optimizasyonu</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label htmlFor="message" className="block text-dark-700 font-medium mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Projeniz hakkında detayları paylaşın..."
                    />
                  </div>

                  {/* Gönder Butonu */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Mesajı Gönder</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sağ Taraf - İletişim Bilgileri */}
          <div className="space-y-8">
            {/* İletişim Bilgileri */}
            <div className="card">
              <h3 className="text-2xl font-bold text-dark-800 mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white group-hover:bg-primary-500 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800">{info.title}</h4>
                      <p className="text-dark-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="card">
              <h3 className="text-2xl font-bold text-dark-800 mb-6">
                Sosyal Medya
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-dark-600 text-white rounded-full flex items-center justify-center transition-all duration-300 ${social.color} transform hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Hızlı İletişim */}
            <div className="card bg-gradient-to-br from-primary-400 to-secondary-500 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Hızlı İletişim
              </h3>
              <p className="mb-6 opacity-90">
                Acil durumlar için WhatsApp üzerinden 
                direkt iletişime geçebilirsiniz.
              </p>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp'ta Sohbet Başlat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-dark-600">
            📍 İstanbul merkezli olarak hizmet veriyoruz. 
            Türkiye'nin her yerinden projeler kabul ediyoruz.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
